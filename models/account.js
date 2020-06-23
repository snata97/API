var database = require('../db');
var db = database.connect();

exports.findById = function (id) {
    return db.task(t => {
        return t.one('SELECT * FROM account WHERE id=${id}', {id: id})
            .then(function(){
                    return t.multi('SELECT * FROM account WHERE id=${id};'+
                    'SELECT cont.id, cont.name, cont_acc.url FROM contact_account AS cont_acc LEFT JOIN contact as cont ON cont_acc.contactid=cont.id WHERE cont_acc.accountid=${id};'+
                    'SELECT comp.id,comp.name, comp_acc.level FROM competence_account AS comp_acc LEFT JOIN competence as comp ON comp_acc.competenceid=comp.id WHERE comp_acc.accountid=${id};'+
                    'SELECT proj.id,proj.name, proj.category FROM account_in_project AS acc_proj LEFT JOIN project as proj ON acc_proj.projectid=proj.id WHERE acc_proj.accountid=${id}', {id: id});
            })
            .catch(function (err) {
                return err;
            });
    })
}


exports.all = function () {
    return db.any(`
       SELECT acc.*, 
                array_to_json(array_agg(json_build_object('name',comp_table.name,'level', comp_table.level))) as competences
        FROM account AS acc 
        LEFT JOIN (competence_account as comp_acc 
        LEFT JOIN competence as comp 
        ON comp_acc.competenceid=comp.id) AS comp_table 
        ON acc.id=comp_table.accountid
        GROUP BY acc.id`
       );
}

exports.allPageLimit = function (page, limit, req) {
    let keysAndValues = [];
    for (let key in req) {
        if(key=="fio") {
            keysAndValues.push("acc.lastname || ' ' || acc.firstname"+" LIKE '%"+req[key]+"%' OR acc.firstname || ' ' || acc.lastname"+" LIKE '%"+req[key]+"%' ");
            continue;
        }
        keysAndValues.push(key +" LIKE '%"+req[key]+"%' ");
    }
    let where="";
    if(keysAndValues.length != 0){
        where = " WHERE "+ keysAndValues.join(' AND ');
    }
    return db.any(`
       SELECT acc.*, 
              array_to_json(array_agg(json_build_object('name',comp_table.name,'level', comp_table.level))) as competences
        FROM account AS acc 
        LEFT JOIN (competence_account as comp_acc 
        LEFT JOIN competence as comp 
        ON comp_acc.competenceid=comp.id) AS comp_table 
        ON acc.id=comp_table.accountid
        $1:raw
        GROUP BY acc.id OFFSET `+ page*limit+` LIMIT `+limit+`;`
        , where);
}

exports.create = function (body) {
    let keys = [];
    let values = [];
    for (let key in body) {
        keys.push(key);
        values.push('${'+key+'}');
    }
    return db.task(t => {
        return t.none('INSERT INTO account ('+ keys.join(',') +') VALUES(' + values.join(',') + ')', body)
            .then(function(){
                return db.none('INSERT INTO contact_account (accountid, contactid, url) VALUES(${id}, 1, ${url})', {id: body.id, url: 'https://leader-id.ru/'+body.id});
            })
            .catch(function (err) {
                return err;
            });
    })
}

exports.update = function (body,id) {
    let keysAndValues = [];
    for (let key in body) {
        keysAndValues.push(key+" = ${"+ key+"}");
    }
    return db.none('UPDATE account SET '+ keysAndValues.join(',') + ' WHERE id = '+id, body);
}

exports.delete = function (id) {
    return db.none('DELETE FROM account WHERE id = '+ id);    
}