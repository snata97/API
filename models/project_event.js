var database = require('../db');
var db = database.connect();

exports.create = function (body) {
    let keys = [];
    let values = [];
    for (let key in body) {
        keys.push(key);
        values.push('${'+key+'}');
    }
    return db.none('INSERT INTO event ('+ keys.join(',') +') VALUES(' + values.join(',') + ')', body);
}

exports.delete = function (body) {
    return db.none('DELETE FROM event WHERE id = ${id} AND projectid = ${projectid}', {id: body.id, projectid: body.projectid});    
}