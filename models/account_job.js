var database = require('../db');
var db = database.connect();

exports.create = function (body, accountid, jobid, projectid) {
    let keys = [];
    let values = [];
    for (let key in body) {
        keys.push("date");
        values.push("${"+ key+"}");
    }
    keys.push("accountid");
    keys.push("jobid");
    keys.push("projectid");
    values.push(accountid);
    values.push(jobid);
    values.push(projectid);
   return db.none('INSERT INTO account_in_project ('+ keys.join(',') +') VALUES('+ values.join(',') + ');', body);
}

exports.update = function (body, accountid, jobid, projectid) {
    let keysAndValues = [];
    for (let key in body) {
        keysAndValues.push(key+" = ${"+ key+'}');
    }
    keysAndValues.push("jobid = "+ jobid);
    return db.none('UPDATE account_in_project SET '+ keysAndValues.join(',') + ' WHERE accountid = '+ accountid + ' AND projectid = '+ projectid, body);
}

exports.delete = function (accountid, jobid, projectid) {
     return db.none('DELETE FROM account_in_project WHERE accountid=${accountid} AND projectid=${projectid} AND jobid=${jobid}', {accountid: accountid,projectid: projectid, jobid: jobid});    
}