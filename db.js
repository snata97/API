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
        var connectionString = process.env.DB_CONN;
        state.db = pgp(connectionString);
        return state.db;
    }
}

