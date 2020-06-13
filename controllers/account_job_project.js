var account_job_project = require('../models/account_job_project');

exports.findById = function(req, res) {
  account_job_project.findById(req.params.user_id, req.params.project_id, req.params.job_id)
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
                error_description: 'Не найдена связка пользователь-компетенция'
              });
           }
        })
};

exports.create = function(req, res) {
  account_job_project.create(req.body)
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
  account_job_project.update(req.body)
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
              error_description: err.code
          });
      })
};

exports.delete = function(req, res) {
  account_job_project.delete(req.body)
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
