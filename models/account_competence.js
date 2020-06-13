var database = require('../db');
var db = database.connect();

exports.update = function (body,accountid) {
    let competences = body.competences;
    let queries = [];
    let values = [];
    let keysValyes = [];
    for (let item in competences){
        values = [];
        keysValyes = [];
        values.push(accountid);
        for (let key in competences[item]) {
            values.push(competences[item][key]);
            keysValyes.push(key + "=" + competences[item][key]);
        }
        queries.push(`INSERT INTO competence_account (accountid, competenceid, level) VALUES (` + values.join(',') + `) ON CONFLICT (accountid,competenceid) DO UPDATE SET ` + keysValyes.join(",")
        );
    }
    return db.multi(
        queries.join(";")
    );    
}

exports.delete= function (body,accountid) {
    let competences = body.competences;
    let queries = [];
    let competenceid;
    for (let item in competences){
        for (let key in competences[item]) {
            competenceid = Number(competences[item][key]);
        }
        queries.push(`DELETE FROM competence_account WHERE accountid =`+ accountid + ` AND competenceid = `+ competenceid);
    }
    return db.multi(
        queries.join(";")
    );    
}