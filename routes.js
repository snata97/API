const express = require("express");
const router = express.Router();
const accountController = require('./controllers/account');
const accountContactController = require('./controllers/account_contact');
const accountCompetenceController = require('./controllers/account_competence');
const jobController = require('./controllers/job');
const competenceController = require('./controllers/competence');
const contactController = require('./controllers/contact');
const projectController = require('./controllers/project');
const projectEventController = require('./controllers/project_event');
const projectVacancyController = require('./controllers/project_vacancy');
const accountVacancyController = require('./controllers/account_vacancy');
const accountJobController = require('./controllers/account_job');

// '/users'
router.get('/users', accountController.all);
router.get('/users/:page/:limit', accountController.allPageLimit);
router.get('/users/:id', accountController.findById);
router.post('/users', accountController.create);
router.put('/users/:id', accountController.update);
router.delete('/users/:id', accountController.delete);
router.put('/users/:userid/contacts', accountContactController.update);
router.delete('/users/:userid/contacts', accountContactController.delete);
router.put('/users/:userid/competences', accountCompetenceController.update);
router.delete('/users/:userid/competences', accountCompetenceController.delete);

// // '/projects'
router.get('/projects', projectController.all);
router.get('/projects/:id', projectController.findById);
router.get('/projects/:page/:limit', projectController.allPageLimit);
router.post('/projects/edit/:userid', projectController.create);
router.put('/projects/edit/:projectid/:userid', projectController.update);
router.delete('/projects/edit/:projectid/:userid', projectController.delete);
router.post('/projects/edit/:projectid/events', projectEventController.create);//Создать мероприятие  к проекту
router.delete('/projects/edit/:projectid/events', projectEventController.delete);//Удалить мероприятие проекта
router.put('/projects/edit/:projectid/vacancies', projectVacancyController.update);//Создать или изменить вакансии проекта
router.delete('/projects/edit/:projectid/vacancies', projectVacancyController.delete);//Удалить вакансии проекта

router.post('/projects/:projectid/vacancies/:vacancyid/:userid', accountVacancyController.create);
router.delete('/projects/:projectid/vacancies/:vacancyid/:userid', accountVacancyController.delete);

router.post('/projects/:projectid/jobs/:jobid/:userid', accountJobController.create);
router.put('/projects/:projectid/jobs/:jobid/:userid', accountJobController.update);
router.delete('/projects/:projectid/jobs/:jobid/:userid', accountJobController.delete);


// '/additional' // http://localhost:3012/additional
router.post('/upsert/contact', contactController.create);
router.put('/upsert/contact', contactController.update);
router.delete('/upsert/contact', contactController.delete);
router.post('/upsert/competence', competenceController.create);
router.put('/upsert/competence', competenceController.update);
router.delete('/upsert/competence', competenceController.delete);
router.post('/upsert/job', jobController.create)
router.put('/upsert/job', jobController.update);
router.delete('/upsert/job', jobController.delete);

module.exports = router;
