var database = require('../db');
var db = database.connect();

exports.create = function (body,accountid,vacancyid) {
    let keys = [];
    let values = [];
    for (let key in body) {
        keys.push(key);
        values.push('${'+key+'}');
    }
    console.log(('INSERT INTO vacancy_account (accountid, vacancyid, '+ keys.join(',') +') VALUES('+accountid +', '+ vacancyid +', '+ values.join(',') + ');', body));
    return db.none('INSERT INTO vacancy_account (accountid, vacancyid, '+ keys.join(',') +') VALUES('+accountid +', '+ vacancyid +', '+ values.join(',') + ');', body);
}

exports.delete = function (accountid,vacancyid) {
   return db.none('DELETE FROM vacancy_account WHERE accountid = ${accountid} AND vacancyid = ${vacancyid}', {accountid: accountid,vacancyid: vacancyid});    
}