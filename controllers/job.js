var job = require('../models/job');

exports.create = function(req, res) {
  job.create(req.body)
      .then(function () {
          res.status(201)
          .json({
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
  job.update(req.body)
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
  job.delete(req.body)
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
