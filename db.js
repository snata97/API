var options = {
    schema: 'flamingspace'
};
var pgp = require("pg-promise")(options);

var state = {
    db: null
};

module.exports.connect = function(){
    if (state.db){
        return state.db;
    }
    else {
        var connectionString = 'postgres://postgres:20fs20@127.0.0.1:5432/flamingspacedb';
        state.db = pgp(connectionString);
        return state.db;
    }
}

