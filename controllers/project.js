var project = require('../models/project');

exports.all = function(req, res) {
  project.all()
        .then(function (data) {
            res.status(200)
              .json({
                status: 'success',
                data: data,
                message: 'Все проекты'
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

exports.findById = function(req, res) {
  project.findById(req.params.id)
        .then(function ([info, participants, vacancies, events]) {
          res.status(200)
            .json({
              status: 'success',
              data: {
                info:info,
                participants: participants,
                vacancies:vacancies,
                events: events,
              },
              message: 'Информация о проекте'
            });
        })
        .catch(function (err) {
              res.status(404)
              .json({
                status: 'error',
                error: 'api_error',
                error_code: 404,
                error_description: 'Не найден проект'
              });
        })
};

exports.allPageLimit = function(req, res) {
  project.allPageLimit(Number(req.params.page), Number(req.params.limit),req.query)
      .then(function (data) {
          res.status(200)
          .json({
            status: 'success',
            data: data
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

exports.create = function(req, res) {
  project.create(req.body, req.params.userid)
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
  project.update(req.body, req.params.projectid, req.params.userid)
      .then(function () {
          res.status(204).end();
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
  project.delete(req.params.projectid, req.params.userid)
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

