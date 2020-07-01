var account_vacancy = require('../models/account_vacancy');

exports.create = function(req, res) {
  account_vacancy.create(req.body,req.params.userid, req.params.vacancyid)
      .then(function () {
          res.status(201).json({
            status: 'created'
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
  account_vacancy.delete(req.params.userid, req.params.vacancyid)
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

