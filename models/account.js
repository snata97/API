var database = require('../db');
var db = database.connect();

exports.findById = function (id) {
    return db.one('SELECT * FROM accounts_info WHERE id=${id}', {id: id});
}


exports.all = function () {
    return db.any(`
       SELECT * FROM accounts_info;`
    );
}

exports.allPageLimit = function (page, limit, req) {
    let keysAndValues = [];
    for (let key in req) {
        if(key=="fio") {
            keysAndValues.push("accounts_info.lastname || ' ' || accounts_info.firstname"+" LIKE '%"+req[key]+"%' OR accounts_info.firstname || ' ' || accounts_info.lastname"+" LIKE '%"+req[key]+"%' ");
            continue;
        }
        keysAndValues.push(key +" LIKE '%"+req[key]+"%' ");
    }
    let where="";
    if(keysAndValues.length != 0){
        where = " WHERE "+ keysAndValues.join(' AND ');
    }
    return db.any(`
        SELECT * FROM accounts_info
        $1:raw
        OFFSET `+ page*limit+` LIMIT `+limit+`;`
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