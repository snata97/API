var database = require('../db');
var db = database.connect();

exports.all = function () {
    return db.any(`
        SELECT proj.*, 
            array_to_json(array_agg(json_build_object('name',vac_table.name))) as vacancies
        FROM project AS proj 
        LEFT JOIN (vacancy LEFT JOIN job
        ON vacancy.jobid=job.id) AS vac_table 
        ON proj.id=vac_table.projectid
        GROUP BY proj.id`
    );
}

exports.findById = function (id) {
    return db.task(t => {
        return t.one('SELECT * FROM project WHERE id=${id}', {id: id})
            .then(function(){
                    return t.multi(
                    'SELECT * FROM project WHERE id=${id};'+
                    'SELECT acc.id, acc.firstname, acc.lastname, acc.fathername, acc.photo, array_to_json(array_agg(json_build_object("name",job.name))) as jobs FROM account_in_project AS acc_proj LEFT JOIN account AS acc ON acc_proj.accountid = acc.id LEFT JOIN job AS job ON acc_proj.jobid = job.id WHERE acc_proj.projectid=${id} GROUP BY acc.id;'+
                    'SELECT vacancy.id, job.name, vacancy.description, vacancy.count FROM vacancy LEFT JOIN job AS job ON vacancy.jobid = job.id WHERE vacancy.projectid=${id};'+
                    'SELECT event.id, event.name, event.photo, event.date FROM event LEFT JOIN project ON project.id = event.projectid WHERE event.projectid=${id};'
                    , {id: id})
            })
            .catch(function (err) {
                return err;
            });
    })
}

exports.allPageLimit = function (page, limit, req) {
    let keysAndValues = [];
    for (let key in req) {
        keysAndValues.push(key +" LIKE '%"+req[key]+"%' ");
    }
    let where="";
    if(keysAndValues.length != 0){
        where = " WHERE "+ keysAndValues.join(' AND ');
    }
    return db.any(`
        SELECT proj.*, 
               array_to_json(array_agg(json_build_object('name',vac_table.name))) as vacancies
        FROM project AS proj 
        LEFT JOIN (vacancy
        LEFT JOIN job
        ON vacancy.jobid=job.id) AS vac_table 
        ON proj.id=vac_table.projectid
        $1:raw
        GROUP BY proj.id OFFSET `+ page*limit+` LIMIT `+limit+`;`
        , where);
}

exports.create = function (body, accountid) {
    let keys = [];
    let values = [];
    for (let key in body) {
        keys.push(key);
        values.push('${'+key+'}');
    }
    keys.push("adminid");
    values.push(accountid);
    return db.multi(`INSERT INTO project (`+ keys.join(',') +`) VALUES(` + values.join(',') + `);`, body);
}

exports.update = function (body, projectid, accountid) {
    let keysAndValues = [];
    for (let key in body) {
        keysAndValues.push(key+" = ${"+ key+'}');
    }
    return db.none('UPDATE project SET '+ keysAndValues.join(',') + ' WHERE adminid = '+ accountid + ' AND id = '+ projectid, body);
}

exports.delete = function (projectid, accountid) {
    return db.none('DELETE FROM project WHERE id = ${projectid} AND adminid = ${accountid}', {projectid: projectid, accountid: accountid});    
}
