var database = require('../db');
var db = database.connect();

exports.update = function (body,accountid) {
    let contacts = body.contacts;
    let queries = [];
    let values = [];
    let keysValyes = [];
    for (let item in contacts){
        values = [];
        keysValyes = [];
        values.push(accountid);
        for (let key in contacts[item]) {
            if (typeof contacts[item][key] === 'string') {
                values.push("'"+contacts[item][key]+"'");
                keysValyes.push(key + " = '" + contacts[item][key] + "'");
                continue;
            }
            values.push(contacts[item][key]);
            keysValyes.push(key + "=" + contacts[item][key]);
        }
        queries.push(`INSERT INTO contact_account (accountid, contactid, url) VALUES (` + values.join(',') + `) ON CONFLICT (accountid,contactid) DO UPDATE SET ` + keysValyes.join(","));
    }
    return db.multi(
        queries.join(";")
    );    
}

exports.delete = function (body,accountid) {
    let contacts = body.contacts;
    let queries = [];
    let contactid;
    for (let item in contacts){
        for (let key in contacts[item]) {
            contactid = contacts[item][key];
        }
        queries.push(`DELETE FROM contact_account WHERE accountid =`+ accountid + ` AND contactid = `+ contactid);
    }
    return db.multi(
        queries.join(";")
    );
}