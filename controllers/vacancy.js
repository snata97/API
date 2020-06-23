var vacancy = require('../models/vacancy');

exports.findById = function(req, res) {
  vacancy.findById(req.params.job_id, req.params.project_id)
      .then(function (data) {
          res.status(200)
            .json({
              status: 'success',
              data: data
            });
        })
        .catch(function (err) {
          if (err.name === 'QueryResultError') {
              res.status(404)
              .json({
                status: 'error',
                error: 'api_error',
                error_code: 404,
                error_description: 'Не найдена связка работа-проект'
              });
           }
        })
};

exports.create = function(req, res) {
  vacancy.create(req.body)
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
              error_description: err.code
          });
      })
};

exports.update = function(req, res) {
  vacancy.update(req.body)
      .then(function () {
          res.status(204);
        })
      .catch(function (err) {
          res.status(404)
          .json({
              status: 'error',
              error: 'api_error',
              error_code: 404,
              error_description: err.code
          });
      })
};

exports.delete = function(req, res) {
  vacancy.delete(req.body)
      .then(function () {
          res.status(204);
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

