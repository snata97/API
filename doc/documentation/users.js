/**
* @api {get} http://api.flamingspace.sevsu.ru/users Получить пользователей системы
* @apiName GetUsers
* @apiGroup User
* @apiSuccess (Success 200) {String}    status                  Статус запроса
* @apiSuccess (Success 200) {Object[]}  data                    Список с участниками
* @apiSuccess (Success 200) {Integer}   data.id                 ID
* @apiSuccess (Success 200) {String}    data.firstname          Имя
* @apiSuccess (Success 200) {String}    data.lastname           Фамилия
* @apiSuccess (Success 200) {String}    data.fathername         Отчество
* @apiSuccess (Success 200) {String}    data.photo              Фото
* @apiSuccess (Success 200) {String}    data.post               "Положение"
* @apiSuccess (Success 200) {String}    data.status             Статус
* @apiSuccess (Success 200) {String}    data.nickname           Ник
* @apiSuccess (Success 200) {Object[]}  data.competences        Компетенции
* @apiSuccess (Success 200) {String}    data.competences.name   Наименование
* @apiSuccess (Success 200) {Object[]}  data.contacts           Контакты
* @apiSuccess (Success 200) {String}    data.contacts.name      Наименование
* @apiSuccess (Success 200) {String}    data.contacts.url       URL
* @apiSuccess (Success 200) {Object[]}  data.projects           Проекты
* @apiSuccess (Success 200) {Integer}   data.projects.id        ID
* @apiSuccess (Success 200) {String}    data.projects.name      Наименование
* @apiSuccess (Success 200) {Object[]}  data.events             Мероприятия
* @apiSuccess (Success 200) {Integer}   data.events.id          ID мероприятия
* @apiSuccess (Success 200) {Integer}   data.events.projectID   ID проекта
* @apiSuccess (Success 200) {String}    data.events.name        Наименование
* @apiSuccess (Success 200) {String}    data.events.photo       Фото
* @apiSuccess (Success 200) {Date}      data.events.date        Дата
* @apiSuccess (Success 200) {String}    message                 Поясняющее сообщение
* @apiError   (Error 404)   {String}    status                  Статус запроса
* @apiError   (Error 404)   {String}    error                   Поясняющее сообщение
* @apiError   (Error 404)   {Integer}    error_code             Код ошибки
* @apiError   (Error 404)   {String}    error_description       Описание ошибки
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 200 OK
        {
            "status": "success",
            "data": [
                {
                    "id": id,
                    "firstname": "firstname",
                    "lastname": "lastname",
                    "farthername": "farthername",
                    "photo": url,
                    "post": "post",
                    "status": "status",
                    "nickname": "nickname",
                    "competences": [
                        {
                        "name": name
                        }
                    ],
                    "contacts": [
                        {
                        "name": "name",
                        "url": "url"
                        }
                        }
                    ],
                    "projects": [
                        {
                        "id": id,
                        "name": "name"
                        }
                    ],
                    "events": [
                        {
                        "id": id,
                        "projectID": id,
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
* @api {get} http://api.flamingspace.sevsu.ru/users/page/limit Получить пользователей постранично и с фильтрацией
* @apiName GetUsersFilter
* @apiGroup User
* @apiParam (Параметры маршрута) {Integer}      page            Номер страницы           
* @apiParam (Параметры маршрута) {Integer}      limit           Количество элементов
* @apiParam (Параметр) {String}         [fio]                   Поиск по фамилии и имени            
* @apiParam (Параметр) {String}         [status]                Поиск по статусу участника
* @apiSuccess (Success 200) {String}    status                  Статус запроса
* @apiSuccess (Success 200) {Object[]}  data                    Список с участниками
* @apiSuccess (Success 200) {Integer}   data.id                 ID
* @apiSuccess (Success 200) {String}    data.firstname          Имя
* @apiSuccess (Success 200) {String}    data.lastname           Фамилия
* @apiSuccess (Success 200) {String}    data.fathername         Отчество
* @apiSuccess (Success 200) {String}    data.photo              Фото
* @apiSuccess (Success 200) {String}    data.post               "Положение"
* @apiSuccess (Success 200) {String}    data.status             Статус
* @apiSuccess (Success 200) {String}    data.nickname           Ник
* @apiSuccess (Success 200) {Object[]}  data.competences        Компетенции
* @apiSuccess (Success 200) {String}    data.competences.name   Наименование
* @apiSuccess (Success 200) {Object[]}  data.contacts           Контакты
* @apiSuccess (Success 200) {String}    data.contacts.name      Наименование
* @apiSuccess (Success 200) {String}    data.contacts.url       URL
* @apiSuccess (Success 200) {Object[]}  data.projects           Проекты
* @apiSuccess (Success 200) {Integer}   data.projects.id        ID
* @apiSuccess (Success 200) {String}    data.projects.name      Наименование
* @apiSuccess (Success 200) {Object[]}  data.events             Мероприятия
* @apiSuccess (Success 200) {Integer}   data.events.id          ID мероприятия
* @apiSuccess (Success 200) {Integer}   data.events.projectID   ID проекта
* @apiSuccess (Success 200) {String}    data.events.name        Наименование
* @apiSuccess (Success 200) {String}    data.events.photo       Фото
* @apiSuccess (Success 200) {Date}      data.events.date        Дата
* @apiSuccess (Success 200) {String}    message                 Поясняющее сообщение
* @apiError   (Error 404)   {String}    status                  Статус запроса
* @apiError   (Error 404)   {String}    error                   Поясняющее сообщение
* @apiError   (Error 404)   {Integer}    error_code             Код ошибки
* @apiError   (Error 404)   {String}    error_description       Описание ошибки
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 200 OK
        {
            "status": "success",
            "data": [
                {
                    "id": id,
                    "firstname": "firstname",
                    "lastname": "lastname",
                    "farthername": "farthername",
                    "photo": url,
                    "post": "post",
                    "status": "status",
                    "nickname": "nickname",
                    "competences": [
                        {
                        "name": name
                        }
                    ],
                    "contacts": [
                        {
                        "name": "name",
                        "url": "url"
                        }
                        }
                    ],
                    "projects": [
                        {
                        "id": id,
                        "name": "name"
                        }
                    ],
                    "events": [
                        {
                        "id": id,
                        "projectID": id,
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
* @api {get} http://api.flamingspace.sevsu.ru/users/id Получить информацию пользователя по ID
* @apiName GetUserID
* @apiGroup User
* @apiParam (Параметры маршрута)  {Integer} id   ID участника
* @apiSuccess (Success 200) {String}    status                  Статус запроса
* @apiSuccess (Success 200) {Object[]}  data                    Данные
* @apiSuccess (Success 200) {Object[]}  data.info               Информация аккаунта
* @apiSuccess (Success 200) {Integer}   data.id                 ID
* @apiSuccess (Success 200) {String}    data.firstname          Имя
* @apiSuccess (Success 200) {String}    data.lastname           Фамилия
* @apiSuccess (Success 200) {String}    data.fathername         Отчество
* @apiSuccess (Success 200) {String}    data.photo              Фото
* @apiSuccess (Success 200) {String}    data.post               "Положение"
* @apiSuccess (Success 200) {String}    data.status             Статус
* @apiSuccess (Success 200) {String}    data.nickname           Ник
* @apiSuccess (Success 200) {Object[]}  data.competences        Компетенции
* @apiSuccess (Success 200) {String}    data.competences.name   Наименование
* @apiSuccess (Success 200) {Object[]}  data.contacts           Контакты
* @apiSuccess (Success 200) {String}    data.contacts.name      Наименование
* @apiSuccess (Success 200) {String}    data.contacts.url       URL
* @apiSuccess (Success 200) {Object[]}  data.projects           Проекты
* @apiSuccess (Success 200) {Integer}   data.projects.id        ID
* @apiSuccess (Success 200) {String}    data.projects.name      Наименование
* @apiSuccess (Success 200) {Object[]}  data.events             Мероприятия
* @apiSuccess (Success 200) {Integer}   data.events.id          ID мероприятия
* @apiSuccess (Success 200) {Integer}   data.events.projectID   ID проекта
* @apiSuccess (Success 200) {String}    data.events.name        Наименование
* @apiSuccess (Success 200) {String}    data.events.photo       Фото
* @apiSuccess (Success 200) {Date}      data.events.date        Дата
* @apiSuccess (Success 200) {String}    message                 Поясняющее сообщение
* @apiError   (Error 404)   {String}    status                  Статус запроса
* @apiError   (Error 404)   {String}    error                   Поясняющее сообщение
* @apiError   (Error 404)   {Integer}    error_code              Код ошибки
* @apiError   (Error 404)   {String}    error_description       Описание ошибки
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 200 OK
        {
            "status": "success",
            "data": {
                    "id": id,
                    "firstname": "firstname",
                    "lastname": "lastname",
                    "farthername": "farthername",
                    "photo": url,
                    "post": "post",
                    "status": "status",
                    "nickname": "nickname",
                    "competences": [
                        {
                        "name": name
                        }
                    ],
                    "contacts": [
                        {
                        "name": "name",
                        "url": "url"
                        }
                        }
                    ],
                    "projects": [
                        {
                        "id": id,
                        "name": "name"
                        }
                    ],
                    "events": [
                        {
                        "id": id,
                        "projectID": id,
                        "name": "name",
                        "photo": "photo_url",
                        "date": "yyyy-mm-dd"
                        }
                    ]
                },
            "message": "Информация о пользователе"
        }
* @apiErrorExample {json} Error-Response:
        HTTP/1.1 404 NOT FOUND
        {
            status: 'error',
            error: 'api_error',
            error_code: 404,
            error_description: "Не найден пользователь с Leader-ID: Id"
        }
*/

/**
* @api {post} http://api.flamingspace.sevsu.ru/users Добавить участника
* @apiName  PostUser
* @apiGroup User 
* @apiParam {Integer}    id              ID
* @apiParam {String}    firstname       Имя
* @apiParam {String}    lastname        Фамилия
* @apiParam {String}    [fathername]    Отчество
* @apiParam {String}    [photo]         Фото
* @apiParam {String}    [post]          "Положение"
* @apiParam {String}    [status]        Статус
* @apiParam {String}    nickname        Ник
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
* @api {put} http://api.flamingspace.sevsu.ru/users/id Обновить данные участника
* @apiName  PutUser
* @apiGroup User 
* @apiParam (Параметры маршрута) {Integer}   id                  ID
* @apiParam {String}    post                "Положение"
* @apiParam {String}    status              Статус
* @apiParam {String}    nickname            Ник
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
* @api {delete} http://api.flamingspace.sevsu.ru/users/id Удалить информацию об участнике
* @apiName  DeleteUser
* @apiGroup User
* @apiParam (Параметры маршрута) {Integer}  id    ID участника
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
* @api {put} http://api.flamingspace.sevsu.ru/users/userid/contacts Добавить или обновить контакты участника
* @apiName  PutContact
* @apiGroup User 
* @apiParam (Параметры маршрута) {Integer}       userid                  ID участника
* @apiParam {Object[]}      contacts                Контакты
* @apiParam {Integer}       contactid               ID
* @apiParam {String}        url                     URL
* @apiParamExample {json} Request-Example:
    { 
        "contacts": [
            {
                "contactid": 2,
                "url": "url"
            },
            {
                "contactid": 3,
                "url": "url"
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
* @api {delete} http://api.flamingspace.sevsu.ru/users/userid/contacts Удалить контакты участника
* @apiName  DeleteContact
* @apiGroup User 
* @apiParam (Параметры маршрута) {Integer}           userid                  ID участника
* @apiParam {Object[]}       contacts                Контакты
* @apiParam {Integer}        contactid               ID
* @apiParamExample {json} Request-Example:
    { 
        "contacts": [
            {
                "contactid": 2
            },
            {
                "contactid": 3
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
            error_description: 'not found'
        }
*/

/**
* @api {put} http://api.flamingspace.sevsu.ru/users/userid/competences Добавить или обновить компетенции участника
* @apiName  PutCompetence
* @apiGroup User 
* @apiParam (Параметры маршрута) {Integer}        userid               ID участника
* @apiParam {Object[]}       competences             Компетенции
* @apiParam {Integer}        competenceid            ID
* @apiParam {Integer}        level                   Уровень
* @apiParamExample {json} Request-Example:
    { 
        "competences": [
            {
                "competenceid": 1,
                "level": 1
            },
            {
                "competenceid": 2,
                "level": 3
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
* @api {delete} http://api.flamingspace.sevsu.ru/users/userid/competences Удалить компетенции участника
* @apiName  DeleteCompetence
* @apiGroup User 
* @apiParam (Параметры маршрута) {Integer}        userid                  ID участника
* @apiParam {Object[]}       competences             Компетенции
* @apiParam {Integer}        competenceid            ID
* @apiParamExample {json} Request-Example:
    { 
        "competences": [
            {
                "competenceid": 1
            },
            {
                "competenceid": 2
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
            error_description: 'not found'
        }
*/
