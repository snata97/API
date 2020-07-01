var account_contact = require('../models/account_contact');

exports.update = function(req, res) {
  account_contact.update(req.body,req.params.userid)
      .then(function () {
          res.status(204).end();
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
  account_contact.delete(req.body,req.params.userid)
      .then(function () {
          res.status(204).end();
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

