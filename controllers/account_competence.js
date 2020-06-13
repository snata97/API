var account_competence = require('../models/account_competence');

exports.update = function(req, res) {
  account_competence.update(req.body,req.params.userid)
      .then(function () {
        res.status(204)
        .json({
          status: 'No content'
        });
      })
      .catch(function (err) {
          res.status(404)
          .json({
              status: 'error',
              error: 'api_error',
              error_code: 404,
              error_description: err.message
          });
      })
};

exports.delete = function(req, res) {
  account_competence.delete(req.body,req.params.userid)
      .then(function () {
          res.status(204)
          .json({
            status: 'No content'
          });
        })
      .catch(function (err) {
          res.status(404)
          .json({
              status: 'error',
              error: 'api_error',
              error_code: 404,
              error_description: 'not found'
              });
      })
};
