/**
* @api {get} http://api.flamingspace.sevsu.ru/projects Получить проекты
* @apiName GetProjects
* @apiGroup Project
* @apiSuccess (Success 200) {String}    status                  Статус запроса
* @apiSuccess (Success 200) {Object[]}  data                    Список с проектами
* @apiSuccess (Success 200) {Integer}   data.id                 ID
* @apiSuccess (Success 200) {String}    data.name               Наименование
* @apiSuccess (Success 200) {String}    data.category           Категория
* @apiSuccess (Success 200) {String}    data.subcategory        Подкатегория
* @apiSuccess (Success 200) {String}    data.description        Описание 
* @apiSuccess (Success 200) {String}    data.status             Статус
* @apiSuccess (Success 200) {Date}      data.projectstart       Дата начала проекта     
* @apiSuccess (Success 200) {Date}      data.projectend         Дата окончания проекта
* @apiSuccess (Success 200) {Integer}   data.adminid            Id администратора проекта
* @apiSuccess (Success 200) {Object[]}  data.accounts            Аккаунты
* @apiSuccess (Success 200) {Integer}   data.accounts.id            ID
* @apiSuccess (Success 200) {String}    data.accounts.firstname     Имя
* @apiSuccess (Success 200) {String}    data.accounts.lastname      Фамилия
* @apiSuccess (Success 200) {String}    data.accounts.fathername    Отчество
* @apiSuccess (Success 200) {String}    data.accounts.photo         Фото
* @apiSuccess (Success 200) {Object[]}  data.accounts.jobs          Позиция в проекте
* @apiSuccess (Success 200) {String}    data.accounts.name          Наименование позиции
* @apiSuccess (Success 200) {Object[]}  data.vacancies           Вакансии
* @apiSuccess (Success 200) {String}    data.vacancies.name         Наименование
* @apiSuccess (Success 200) {String}    data.vacancies.description  Описание
* @apiSuccess (Success 200) {String}    data.vacancies.count        Количество
* @apiSuccess (Success 200) {Object[]}  data.events             Мероприятия
* @apiSuccess (Success 200) {Integer}   data.events.id          ID мероприятия
* @apiSuccess (Success 200) {String}    data.events.name        Наименование
* @apiSuccess (Success 200) {String}    data.events.photo       Фото
* @apiSuccess (Success 200) {Date}      data.events.date        Дата
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
                    "id": id,
                    "name": "name",
                    "subcategory": "subcategory",
                    "category": "category",
                    "description": "description",
                    "status": "status",
                    "projectstart": "yyyy-mm-dd",
                    "projectend": "yyyy-mm-dd",
                    "adminid": id,
                    "accounts": [
                        {
                        "id": id,
                        "firstname": "firstname",
                        "lastname": "lastname",
                        "fathername": "fathername",
                        "photo": "url",
                        "jobs": [
                            {
                            "name": "name"
                            }
                        ],
                        "date": "yyyy-mm-dd"
                        }
                    ],
                    "vacancies": [
                        {
                        "name": "name",
                        "description": "description",
                        "count": 4
                        }
                    ],
                    "events": [
                        {
                        "id": id,
                        "name": "name",
                        "photo": "photo_url",
                        "date": "yyyy-mm-dd"
                        }
                    ]
                    }
            ],
            "message": "Проекты системы"
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
* @apiParam   (Параметры маршрута) {Integer}      page                    Номер страницы           
* @apiParam   (Параметры маршрута) {Integer}      limit                   Количество элементов
* @apiParam   (Параметр) {String}       [name]                  Поиск по наименованию
* @apiParam   (Параметр) {String}       [category]              Поиск по категории          
* @apiParam   (Параметр) {String}       [status]                Поиск по статусу
* @apiSuccess (Success 200) {String}    status                  Статус запроса
* @apiSuccess (Success 200) {Object[]}  data                    Список с проектами
* @apiSuccess (Success 200) {Integer}   data.id                 ID
* @apiSuccess (Success 200) {String}    data.name               Наименование
* @apiSuccess (Success 200) {String}    data.category           Категория
* @apiSuccess (Success 200) {String}    data.subcategory        Подкатегория
* @apiSuccess (Success 200) {String}    data.description        Описание 
* @apiSuccess (Success 200) {String}    data.status             Статус
* @apiSuccess (Success 200) {Date}      data.projectstart       Дата начала проекта     
* @apiSuccess (Success 200) {Date}      data.projectend         Дата окончания проекта
* @apiSuccess (Success 200) {Integer}   data.adminid            Id администратора проекта
* @apiSuccess (Success 200) {Object[]}  data.accounts            Аккаунты
* @apiSuccess (Success 200) {Integer}   data.accounts.id            ID
* @apiSuccess (Success 200) {String}    data.accounts.firstname     Имя
* @apiSuccess (Success 200) {String}    data.accounts.lastname      Фамилия
* @apiSuccess (Success 200) {String}    data.accounts.fathername    Отчество
* @apiSuccess (Success 200) {String}    data.accounts.photo         Фото
* @apiSuccess (Success 200) {Object[]}  data.accounts.jobs          Позиция в проекте
* @apiSuccess (Success 200) {String}    data.accounts.name          Наименование позиции
* @apiSuccess (Success 200) {Object[]}  data.vacancies           Вакансии
* @apiSuccess (Success 200) {String}    data.vacancies.name         Наименование
* @apiSuccess (Success 200) {String}    data.vacancies.description  Описание
* @apiSuccess (Success 200) {String}    data.vacancies.count        Количество
* @apiSuccess (Success 200) {Object[]}  data.events             Мероприятия
* @apiSuccess (Success 200) {Integer}   data.events.id          ID мероприятия
* @apiSuccess (Success 200) {String}    data.events.name        Наименование
* @apiSuccess (Success 200) {String}    data.events.photo       Фото
* @apiSuccess (Success 200) {Date}      data.events.date        Дата
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
                    "id": id,
                    "name": "name",
                    "subcategory": "subcategory",
                    "category": "category",
                    "description": "description",
                    "status": "status",
                    "projectstart": "yyyy-mm-dd",
                    "projectend": "yyyy-mm-dd",
                    "adminid": id,
                    "accounts": [
                        {
                        "id": id,
                        "firstname": "firstname",
                        "lastname": "lastname",
                        "fathername": "fathername",
                        "photo": "url",
                        "jobs": [
                            {
                            "name": "name"
                            }
                        ],
                        "date": "yyyy-mm-dd"
                        }
                    ],
                    "vacancies": [
                        {
                        "name": "name",
                        "description": "description",
                        "count": 4
                        }
                    ],
                    "events": [
                        {
                        "id": id,
                        "name": "name",
                        "photo": "photo_url",
                        "date": "yyyy-mm-dd"
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
* @apiParam   (Параметры маршрута)  id    ID проекта
* @apiSuccess (Success 200) {String}    status                          Статус запроса
* @apiSuccess (Success 200) {Object[]}  data                            Данные
* @apiSuccess (Success 200) {Integer}   data.id                 ID
* @apiSuccess (Success 200) {String}    data.name               Наименование
* @apiSuccess (Success 200) {String}    data.category           Категория
* @apiSuccess (Success 200) {String}    data.subcategory        Подкатегория
* @apiSuccess (Success 200) {String}    data.description        Описание 
* @apiSuccess (Success 200) {String}    data.status             Статус
* @apiSuccess (Success 200) {Date}      data.projectstart       Дата начала проекта     
* @apiSuccess (Success 200) {Date}      data.projectend         Дата окончания проекта
* @apiSuccess (Success 200) {Integer}   data.adminid            Id администратора проекта
* @apiSuccess (Success 200) {Object[]}  data.accounts            Аккаунты
* @apiSuccess (Success 200) {Integer}   data.accounts.id            ID
* @apiSuccess (Success 200) {String}    data.accounts.firstname     Имя
* @apiSuccess (Success 200) {String}    data.accounts.lastname      Фамилия
* @apiSuccess (Success 200) {String}    data.accounts.fathername    Отчество
* @apiSuccess (Success 200) {String}    data.accounts.photo         Фото
* @apiSuccess (Success 200) {Object[]}  data.accounts.jobs          Позиция в проекте
* @apiSuccess (Success 200) {String}    data.accounts.name          Наименование позиции
* @apiSuccess (Success 200) {Object[]}  data.vacancies           Вакансии
* @apiSuccess (Success 200) {String}    data.vacancies.name         Наименование
* @apiSuccess (Success 200) {String}    data.vacancies.description  Описание
* @apiSuccess (Success 200) {String}    data.vacancies.count        Количество
* @apiSuccess (Success 200) {Object[]}  data.events             Мероприятия
* @apiSuccess (Success 200) {Integer}   data.events.id          ID мероприятия
* @apiSuccess (Success 200) {String}    data.events.name        Наименование
* @apiSuccess (Success 200) {String}    data.events.photo       Фото
* @apiSuccess (Success 200) {Date}      data.events.date        Дата
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
                    "id": id,
                    "name": "name",
                    "subcategory": "subcategory",
                    "category": "category",
                    "description": "description",
                    "status": "status",
                    "projectstart": "yyyy-mm-dd",
                    "projectend": "yyyy-mm-dd",
                    "adminid": id,
                    "accounts": [
                        {
                        "id": id,
                        "firstname": "firstname",
                        "lastname": "lastname",
                        "fathername": "fathername",
                        "photo": "url",
                        "jobs": [
                            {
                            "name": "name"
                            }
                        ],
                        "date": "yyyy-mm-dd"
                        }
                    ],
                    "vacancies": [
                        {
                        "name": "name",
                        "description": "description",
                        "count": 4
                        }
                    ],
                    "events": [
                        {
                        "id": id,
                        "name": "name",
                        "photo": "photo_url",
                        "date": "yyyy-mm-dd"
                        }
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
* @apiParam   (Параметры маршрута) {Integer}   userid                     ID создателя проекта
* @apiParam  {String}    name                       Наименование
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
* @apiParam   (Параметры маршрута) {Integer}   projectid                  ID проекта
* @apiParam   (Параметры маршрута) {Integer}   userid                     ID участника
* @apiParam {String}    name                       Наименование
* @apiParam {String}    category                   Категория
* @apiParam {String}    description                Описание 
* @apiParam {String}    status                     Статус
* @apiParam {Date}      projectstart               Дата начала проекта     
* @apiParam {Date}      projectend                 Дата окончания проекта
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 204 No Content
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
* @apiParam   (Параметры маршрута) {Integer}   projectid                  ID проекта
* @apiParam   (Параметры маршрута) {Integer}   userid                     ID участника
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 204 No Content
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
* @apiParam   (Параметры маршрута) {Integer}       projectid           ID проекта
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
* @apiParam   (Параметры маршрута) {Integer}       projectid           ID проекта
* @apiParam {Integer}       id                  ID мероприятия
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 204 No Content
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
* @apiParam   (Параметры маршрута) {Integer}       projectid           ID проекта
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
* @apiParam   (Параметры маршрута) {Integer}       projectid           ID проекта
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
* @apiParam   (Параметры маршрута) {Integer}       projectid           ID проекта
* @apiParam   (Параметры маршрута) {Integer}       vacancyid           ID вакансии
* @apiParam   (Параметры маршрута) {Integer}       userid              ID участника
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
* @apiName  DeleteProjectVacancyAccount
* @apiGroup Project
* @apiParam   (Параметры маршрута) {Integer}       projectid           ID проекта
* @apiParam   (Параметры маршрута) {Integer}       vacancyid           ID вакансии
* @apiParam   (Параметры маршрута) {Integer}       userid              ID участника
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 204 No Content
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
* @apiParam   (Параметры маршрута) {Integer}       projectid           ID проекта
* @apiParam   (Параметры маршрута) {Integer}       jobid               ID вакансии
* @apiParam   (Параметры маршрута) {Integer}       userid              ID участника
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
* @apiParam   (Параметры маршрута) {Integer}       projectid           ID проекта
* @apiParam   (Параметры маршрута) {Integer}       jobid               ID вакансии
* @apiParam   (Параметры маршрута) {Integer}       userid              ID участника
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 204 No Content
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
* @apiParam   (Параметры маршрута) {Integer}       projectid           ID проекта
* @apiParam   (Параметры маршрута) {Integer}       jobid               ID вакансии
* @apiParam   (Параметры маршрута) {Integer}       userid              ID участника
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 204 No Content
* @apiErrorExample {json} Error-Response:
        HTTP/1.1 404 NOT FOUND
        {
            status: 'error',
            error: 'api_error',
            error_code: 404,
            error_description: error message
        }
*/