var database = require('../db');
var db = database.connect();

exports.all = function () {
    return db.any(`
       SELECT * FROM projects_info;`
    );
}

exports.findById = function (id) {
    return db.one('SELECT * FROM projects_info WHERE id=${id}', {id: id});
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
    SELECT * FROM projects_info
    $1:raw
    OFFSET `+ page*limit+` LIMIT `+limit+`;`
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
