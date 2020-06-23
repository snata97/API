var project_vacancy = require('../models/project_vacancy');

exports.update = function(req, res) {
  project_vacancy.update(req.body,req.params.projectid)
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
  project_vacancy.delete(req.body,req.params.projectid)
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

