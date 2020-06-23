var account = require('../models/account');

exports.all = function(req, res) {
  account.all()
        .then(function (data) {
            res.status(200)
              .json({
                status: 'success',
                data: data,
                message: 'Пользователи системы'
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

exports.allPageLimit = function(req, res) {
  account.allPageLimit(Number(req.params.page), Number(req.params.limit),req.query)
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

exports.findById = function(req, res) {
  account.findById(req.params.id)
        .then(function ([info, contacts, competences, projects]) {
          res.status(200)
            .json({
              status: 'success',
              data: {
                info:info,
                contacts: contacts,
                competences:competences,
                projects: projects,
              },
              message: 'Информация о пользователе'
            });
        })
        .catch(function (err) {
              res.status(404)
              .json({
                status: 'error',
                error: 'api_error',
                error_code: 404,
                error_description: 'Не найден пользователь с Leader-ID: Id'
              });
        })
};

exports.create = function(req, res) {
  account.create(req.body)
      .then(function () {
          res.status(201);
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
  account.update(req.body,req.params.id)
      .then(function () {
          res.status(204);
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
  account.delete(req.params.id)
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