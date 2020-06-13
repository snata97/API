/**
* @api {get} http://api.flamingspace.sevsu.ru/projects Получить проекты
* @apiName GetProjects
* @apiGroup Project
* @apiSuccess (Success 200) {String}    status                  Статус запроса
* @apiSuccess (Success 200) {Object[]}  data                    Список с проектами
* @apiSuccess (Success 200) {Integer}    data.id                 ID
* @apiSuccess (Success 200) {String}    data.name               Наименование
* @apiSuccess (Success 200) {String}    data.category           Категория
* @apiSuccess (Success 200) {String}    data.description        Описание 
* @apiSuccess (Success 200) {String}    data.status             Статус
* @apiSuccess (Success 200) {Date}      data.projectstart       Дата начала проекта     
* @apiSuccess (Success 200) {Date}      data.projectend         Дата окончания проекта
* @apiSuccess (Success 200) {Object[]}  data.vacancies          Вакансии
* @apiSuccess (Success 200) {String}    data.vacancies.name     Наименование
* @apiSuccess (Success 200) {String}    message                 Поясняющее сообщение
* @apiError   (Error 404)   {String}    status                  Статус запроса
* @apiError   (Error 404)   {String}    error                   Поясняющее сообщение
* @apiError   (Error 404)   {Integer}    error_code              Код ошибки
* @apiError   (Error 404)   {String}    error_description       Описание ошибки
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 200 ОК
        {
            "status": "success",
            "data": [
                {
                    "id": 1,
                    "name": "Иванушки",
                    "category": "IT",
                    "description": "Повседневная практика показывает, что сплочённость команды профессионалов требует определения и уточнения системы массового участия! Мы вынуждены отталкиваться от того, что сложившаяся структура организации, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для поэтапного и последовательного развития общества. Следует отметить, что базовый вектор развития однозначно определяет каждого участника как способного принимать собственные решения касаемо прогресса профессионального сообщества.",
                    "status": "набор",
                    "projectstart": "2020-05-29T21:00:00.000Z",
                    "projectend": null,
                    "vacancies": [
                        {
                        "name": "Разработчик JS"
                        },
                        {
                        "name": "Куратор"
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "Коробейники",
                    "category": "Культура",
                    "description": "Практический опыт показывает, что новая модель организационной деятельности способствует повышению актуальности форм воздействия? Разнообразный и богатый опыт выбранный нами инновационный путь требует от нас анализа системы масштабного изменения ряда параметров. Задача организации, в особенности же повышение уровня гражданского сознания представляет собой интересный эксперимент проверки системы обучения кадров, соответствующей насущным потребностям? Задача организации, в особенности же повышение уровня гражданского сознания позволяет выполнить важнейшие задания по разработке дальнейших направлений развитая системы массового участия. Не следует, однако, забывать о том, что новая модель организационной деятельности способствует повышению актуальности системы масштабного изменения ряда параметров. Соображения высшего порядка, а также повышение уровня гражданского сознания представляет собой интересный эксперимент проверки форм воздействия.",
                    "status": "набор",
                    "projectstart": "2020-06-14T21:00:00.000Z",
                    "projectend": null,
                    "vacancies": [
                        {
                        "name": "Разработчик JS"
                        },
                        {
                        "name": "Дизайнер"
                        }
                    ]
                }
            ],
            "message": "Пользователи системы"
        }
* @apiErrorExample {json} Error-Response:
        HTTP/1.1 404 NOT FOUND
        {
            status: 'error',
            error: 'api_error',
            error_code: 404,
            error_description: error message
        }
*/
/**
* @api {get} http://api.flamingspace.sevsu.ru/projects/page/limit Получить проекты постранично и с фильтрацией
* @apiName GetProjectsFilter
* @apiGroup Project
* @apiSuccess (Параметр) {Integer}      page                    Номер страницы           
* @apiSuccess (Параметр) {Integer}      limit                   Количество элементов
* @apiSuccess (Параметр) {String}       [name]                  Поиск по наименованию
* @apiSuccess (Параметр) {String}       [category]              Поиск по категории          
* @apiSuccess (Параметр) {String}       [status]                Поиск по статусу
* @apiSuccess (Success 200) {String}    status                  Статус запроса
* @apiSuccess (Success 200) {Object[]}  data                    Список с проектами
* @apiSuccess (Success 200) {Integer}    data.id                 ID
* @apiSuccess (Success 200) {String}    data.name               Наименование
* @apiSuccess (Success 200) {String}    data.category           Категория
* @apiSuccess (Success 200) {String}    data.description        Описание 
* @apiSuccess (Success 200) {String}    data.status             Статус
* @apiSuccess (Success 200) {Date}      data.projectstart       Дата начала проекта     
* @apiSuccess (Success 200) {Date}      data.projectend         Дата окончания проекта
* @apiSuccess (Success 200) {Object[]}  data.vacancies          Вакансии
* @apiSuccess (Success 200) {String}    data.vacancies.name     Наименование
* @apiSuccess (Success 200) {String}    message                 Поясняющее сообщение
* @apiError   (Error 404)   {String}    status                  Статус запроса
* @apiError   (Error 404)   {String}    error                   Поясняющее сообщение
* @apiError   (Error 404)   {Integer}    error_code              Код ошибки
* @apiError   (Error 404)   {String}    error_description       Описание ошибки
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 200 ОК
        {
            "status": "success",
            "data": [
                {
                    "id": 1,
                    "name": "Иванушки",
                    "category": "IT",
                    "description": "Повседневная практика показывает, что сплочённость команды профессионалов требует определения и уточнения системы массового участия! Мы вынуждены отталкиваться от того, что сложившаяся структура организации, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для поэтапного и последовательного развития общества. Следует отметить, что базовый вектор развития однозначно определяет каждого участника как способного принимать собственные решения касаемо прогресса профессионального сообщества.",
                    "status": "набор",
                    "projectstart": "2020-05-29T21:00:00.000Z",
                    "projectend": null,
                    "vacancies": [
                        {
                        "name": "Разработчик JS"
                        },
                        {
                        "name": "Куратор"
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "Коробейники",
                    "category": "Культура",
                    "description": "Практический опыт показывает, что новая модель организационной деятельности способствует повышению актуальности форм воздействия? Разнообразный и богатый опыт выбранный нами инновационный путь требует от нас анализа системы масштабного изменения ряда параметров. Задача организации, в особенности же повышение уровня гражданского сознания представляет собой интересный эксперимент проверки системы обучения кадров, соответствующей насущным потребностям? Задача организации, в особенности же повышение уровня гражданского сознания позволяет выполнить важнейшие задания по разработке дальнейших направлений развитая системы массового участия. Не следует, однако, забывать о том, что новая модель организационной деятельности способствует повышению актуальности системы масштабного изменения ряда параметров. Соображения высшего порядка, а также повышение уровня гражданского сознания представляет собой интересный эксперимент проверки форм воздействия.",
                    "status": "набор",
                    "projectstart": "2020-06-14T21:00:00.000Z",
                    "projectend": null,
                    "vacancies": [
                        {
                        "name": "Разработчик JS"
                        },
                        {
                        "name": "Дизайнер"
                        }
                    ]
                }
            ],
            "message": "Пользователи системы"
        }
* @apiErrorExample {json} Error-Response:
        HTTP/1.1 404 NOT FOUND
        {
            status: 'error',
            error: 'api_error',
            error_code: 404,
            error_description: error message
        }
*/
/**
* @api {get} http://api.flamingspace.sevsu.ru/projects/id Получить проект по ID
* @apiName    GetProjectID
* @apiGroup   Project
* @apiParam   {Integer}  id    ID проекта
* @apiSuccess (Success 200) {String}    status                          Статус запроса
* @apiSuccess (Success 200) {Object[]}  data                            Данные
* @apiSuccess (Success 200) {Integer}   data.id                        ID
* @apiSuccess (Success 200) {String}    data.name                       Наименование
* @apiSuccess (Success 200) {String}    data.category                   Категория
* @apiSuccess (Success 200) {String}    data.description                Описание 
* @apiSuccess (Success 200) {String}    data.status                     Статус
* @apiSuccess (Success 200) {Date}      data.projectstart               Дата начала проекта     
* @apiSuccess (Success 200) {Date}      data.projectend                 Дата окончания проекта
* @apiSuccess (Success 200) {Object[]}  data.participants               Участники
* @apiSuccess (Success 200) {String}    data.participants.id            ID
* @apiSuccess (Success 200) {String}    data.participants.firstname     Имя
* @apiSuccess (Success 200) {String}    data.participants.lastname      Фамилия
* @apiSuccess (Success 200) {String}    data.participants.fathername    Отчество
* @apiSuccess (Success 200) {String}    data.participants.photo         Фото
* @apiSuccess (Success 200) {Object[]}  data.participants.jobs          Работа участника в проекте
* @apiSuccess (Success 200) {String}    data.participants.name          Наименование
* @apiSuccess (Success 200) {Object[]}  data.vacancies                  Вакансии
* @apiSuccess (Success 200) {String}    data.vacancies.id               ID
* @apiSuccess (Success 200) {String}    data.vacancies.name             Наименование
* @apiSuccess (Success 200) {String}    data.vacancies.description      Описание
* @apiSuccess (Success 200) {Integer}   data.vacancies.count            Количество
* @apiSuccess (Success 200) {Object[]}  data.events                     Мероприятия
* @apiSuccess (Success 200) {Integer}   data.events.id                  ID
* @apiSuccess (Success 200) {String}    data.events.name                Наименование
* @apiSuccess (Success 200) {String}    data.events.photo               Фото
* @apiSuccess (Success 200) {Date}      data.events.date                Дата проведения
* @apiSuccess (Success 200) {String}    message                         Поясняющее сообщение
* @apiError   (Error 404)   {String}    status                          Статус запроса
* @apiError   (Error 404)   {String}    error                           Поясняющее сообщение
* @apiError   (Error 404)   {Integer}    error_code                      Код ошибки
* @apiError   (Error 404)   {String}    error_description               Описание ошибки
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 200 OK
        {
            "status": "success",
            "data": {
                "info": [
                {
                    "id": 3,
                    "name": "Коробейники",
                    "category": "Культура",
                    "description": "Практический опыт показывает, что новая модель организационной деятельности способствует повышению актуальности форм воздействия? Разнообразный и богатый опыт выбранный нами инновационный путь требует от нас анализа системы масштабного изменения ряда параметров. Задача организации, в особенности же повышение уровня гражданского сознания представляет собой интересный эксперимент проверки системы обучения кадров, соответствующей насущным потребностям? Задача организации, в особенности же повышение уровня гражданского сознания позволяет выполнить важнейшие задания по разработке дальнейших направлений развитая системы массового участия. Не следует, однако, забывать о том, что новая модель организационной деятельности способствует повышению актуальности системы масштабного изменения ряда параметров. Соображения высшего порядка, а также повышение уровня гражданского сознания представляет собой интересный эксперимент проверки форм воздействия.",
                    "status": "набор",
                    "projectstart": "2020-06-14T21:00:00.000Z",
                    "projectend": null
                }
                ],
                "participants": [
                {
                    "id": 2643,
                    "firstname": "Марк",
                    "lastname": "Багдасаров",
                    "farthername": null,
                    "photo": null,
                    "jobs": [
                    {
                        "name": "Дизайнер"
                    }
                    ]
                }
                ],
                "vacancies": [
                    {
                        "id": 6,
                        "name": "Разработчик С++",
                        "description": "Шестая вакансия",
                        "count": 2
                    },
                    {
                        "id": 4,
                        "name": "Менеджер",
                        "description": "Четвертая вакансия",
                        "count": 1
                    }
                ],
                "events": [
                
                ]
            },
            "message": "Информация о проекте"
            }
* @apiErrorExample {json} Error-Response:
        HTTP/1.1 404 NOT FOUND
        {
            status: 'error',
            error: 'api_error',
            error_code: 404,
            error_description: "Не найден проект"
        }
*/

/**
* @api {post} http://api.flamingspace.sevsu.ru/projects/edit/userid Создать проект
* @apiName  PostProject
* @apiGroup Project 
* @apiParam {Integer}   userid                     ID создателя проекта
* @apiParam {String}    name                       Наименование
* @apiParam {String}    category                   Категория
* @apiParam {String}    description                Описание 
* @apiParam {String}    status                     Статус
* @apiParam {Date}      projectstart               Дата начала проекта     
* @apiParam {Date}      [projectend]               Дата окончания проекта
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 201 Created
        {
            "status": "created"
        }
* @apiErrorExample {json} Error-Response:
        HTTP/1.1 404 NOT FOUND
        {
            status: 'error',
            error: 'api_error',
            error_code: 404,
            error_description: error message
        }
*/

/**
* @api {put} http://api.flamingspace.sevsu.ru/projects/edit/projectid/userid Обновить проект
* @apiName  PutProject
* @apiGroup Project 
* @apiParam {Integer}   projectid                  ID проекта
* @apiParam {Integer}   userid                     ID участника
* @apiParam {String}    name                       Наименование
* @apiParam {String}    category                   Категория
* @apiParam {String}    description                Описание 
* @apiParam {String}    status                     Статус
* @apiParam {Date}      projectstart               Дата начала проекта     
* @apiParam {Date}      projectend                 Дата окончания проекта
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 204 No Content
        {
            "status": "success"
        }
* @apiErrorExample {json} Error-Response:
        HTTP/1.1 404 NOT FOUND
        {
            status: 'error',
            error: 'api_error',
            error_code: 404,
            error_description: error message
        }
*/


/**
* @api {delete} http://api.flamingspace.sevsu.ru/projects/edit/projectid/userid Удалить проект
* @apiName  DeleteProject
* @apiGroup Project
* @apiParam {Integer}   projectid                  ID проекта
* @apiParam {Integer}   userid                     ID участника
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 204 No Content
        {
            "status": "success"
        }
* @apiErrorExample {json} Error-Response:
        HTTP/1.1 404 NOT FOUND
        {
            status: 'error',
            error: 'api_error',
            error_code: 404,
            error_description: error message
        }
*/

/**
* @api {post} http://api.flamingspace.sevsu.ru/projects/edit/projectid/events Добавить мероприятие к проекту
* @apiName  PostEventProject
* @apiGroup Project 
* @apiParam {Integer}       projectid           ID проекта
* @apiParam {Integer}       id                  ID мероприятия
* @apiParam {String}        name                Наименование
* @apiParam {String}        photo               Фотография мероприятия
* @apiParam {Date}          date                Дата проведения мерояприятия
* @apiParamExample {json} Request-Example:
    { 
        "id": 52082,
        "name": "Что делать с собой завтра? Вебинар для выпускников СевГУ",
        "photo": "photo_url",
        "date": "09-05-2020"
    }
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 204 No Content
        {
            "status": "No content"
        }
* @apiErrorExample {json} Error-Response:
        HTTP/1.1 404 NOT FOUND
        {
            status: 'error',
            error: 'api_error',
            error_code: 404,
            error_description: error message
        }
*/

/**
* @api {delete} http://api.flamingspace.sevsu.ru/projects/edit/projectid/events Удалить мероприятия проекта
* @apiName  DeleteEventProject
* @apiGroup Project
* @apiParam {Integer}       projectid           ID проекта
* @apiParam {Integer}       id                  ID мероприятия
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 204 No Content
        {
            "status": "No content"
        }
* @apiErrorExample {json} Error-Response:
        HTTP/1.1 404 NOT FOUND
        {
            status: 'error',
            error: 'api_error',
            error_code: 404,
            error_description: error message
        }
*/

/**
* @api {put} http://api.flamingspace.sevsu.ru/projects/edit/projectid/vacancies Добавить или обновить вакансию проекта
* @apiName  PutVacancyProject
* @apiGroup Project 
* @apiParam {Integer}       projectid           ID проекта
* @apiParam {Object[]}      vacancies           Вакансии
* @apiParam {Integer}       [id]                ID вакансии
* @apiParam {Integer}       jobid               ID работы проекта
* @apiParam {Date}          count               Количество свободных мест работы
* @apiParamExample {json} Request-Update-Example:
            {
                "vacancies":[
                    {
                        "id": 4,
                        "jobid": 4,
                        "count": 3
                    }
                ]
            }
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 204 No Content
        {
            "status": "No content"
        }
* @apiErrorExample {json} Error-Response:
        HTTP/1.1 404 NOT FOUND
        {
            status: 'error',
            error: 'api_error',
            error_code: 404,
            error_description: error message
        }
*/

/**
* @api {delete} http://api.flamingspace.sevsu.ru/projects/edit/projectid/vacancies Удалить вакансии проекта
* @apiName  DeleteVacancyProject
* @apiGroup Project
* @apiParam {Integer}       projectid           ID проекта
* @apiParam {Object[]}      vacancies           Вакансии
* @apiParam {Integer}       id                  ID вакансии
* @apiParamExample {json} Request-Delete-Example:
            {
                "vacancies":[
                    {
                        "id":4
                    },
                    {
                        "id":5
                    }
                ]
            }
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 204 No Content
        {
            "status": "No content"
        }
* @apiErrorExample {json} Error-Response:
        HTTP/1.1 404 NOT FOUND
        {
            status: 'error',
            error: 'api_error',
            error_code: 404,
            error_description: error message
        }
*/

/**
* @api {post} http://api.flamingspace.sevsu.ru/projects/edit/projectid/vacancies/vacancyid/userid Отправить заявку на вакансию в проекте
* @apiName  PostProjectVacancyAccount
* @apiGroup Project 
* @apiParam {Integer}       projectid           ID проекта
* @apiParam {Integer}       vacancyid           ID вакансии
* @apiParam {Integer}       userid              ID участника
* @apiParam {String}        date                Дата отправки
* @apiParam {String}        [message]           Сообщение
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 201 Created
        {
            "status": "created"
        }
* @apiErrorExample {json} Error-Response:
        HTTP/1.1 404 NOT FOUND
        {
            status: 'error',
            error: 'api_error',
            error_code: 404,
            error_description: error message
        }
*/

/**
* @api {delete} http://api.flamingspace.sevsu.ru/projects/edit/projectid/vacancies/vacancyid/userid Удалить заявку на вакансию в проекте
* @apiName  DeleteEventProject
* @apiGroup Project
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 204 No Content
        {
            "status": "No content"
        }
* @apiErrorExample {json} Error-Response:
        HTTP/1.1 404 NOT FOUND
        {
            status: 'error',
            error: 'api_error',
            error_code: 404,
            error_description: error message
        }
*/

/**
* @api {post} http://api.flamingspace.sevsu.ru/projects/projectid/jobs/jobid/userid Присвоить участнику должность в проекте
* @apiName  PostProjectJobAccount
* @apiGroup Project 
* @apiParam {Integer}       projectid           ID проекта
* @apiParam {Integer}       jobid               ID вакансии
* @apiParam {Integer}       userid              ID участника
* @apiParam {String}        date                Дата отправки
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 201 Created
        {
            "status": "created"
        }
* @apiErrorExample {json} Error-Response:
        HTTP/1.1 404 NOT FOUND
        {
            status: 'error',
            error: 'api_error',
            error_code: 404,
            error_description: error message
        }
*/

/**
* @api {put} http://api.flamingspace.sevsu.ru/projects/projectid/jobs/jobid/userid Изменить должность участника в проекте
* @apiName  PutProjectJobAccount
* @apiGroup Project 
* @apiParam {Integer}       projectid           ID проекта
* @apiParam {Integer}       jobid               ID вакансии
* @apiParam {Integer}       userid              ID участника
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 204 No Content
        {
            "status": "No content"
        }
* @apiErrorExample {json} Error-Response:
        HTTP/1.1 404 NOT FOUND
        {
            status: 'error',
            error: 'api_error',
            error_code: 404,
            error_description: error message
        }
*/

/**
* @api {delete} http://api.flamingspace.sevsu.ru/projects/projectid/jobs/jobid/userid Исключить участника из проекта
* @apiName  DeleteProjectJobAccount
* @apiGroup Project
* @apiParam {Integer}       projectid           ID проекта
* @apiParam {Integer}       jobid               ID вакансии
* @apiParam {Integer}       userid              ID участника
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 204 No Content
        {
            "status": "No content"
        }
* @apiErrorExample {json} Error-Response:
        HTTP/1.1 404 NOT FOUND
        {
            status: 'error',
            error: 'api_error',
            error_code: 404,
            error_description: error message
        }
*/