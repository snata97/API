var account_job = require('../models/account_job');

exports.create = function(req, res) {
  account_job.create(req.body, req.params.userid, req.params.jobid, req.params.projectid)
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

exports.update = function(req, res) {
  account_job.update(req.body, req.params.userid, req.params.jobid, req.params.projectid)
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
  account_job.delete(req.params.userid, req.params.jobid, req.params.projectid)
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

