/**
* @api {get} http://api.flamingspace.sevsu.ru/users Получить пользователей системы
* @apiName GetUsers
* @apiGroup User
* @apiSuccess (Success 200) {String}    status                  Статус запроса
* @apiSuccess (Success 200) {Object[]}  data                    Список с участниками
* @apiSuccess (Success 200) {Integer}    data.id                 ID
* @apiSuccess (Success 200) {String}    data.firstname          Имя
* @apiSuccess (Success 200) {String}    data.lastname           Фамилия
* @apiSuccess (Success 200) {String}    data.fathername         Отчество
* @apiSuccess (Success 200) {String}    data.photo              Фото
* @apiSuccess (Success 200) {String}    data.post               "Положение"
* @apiSuccess (Success 200) {String}    data.status             Статус
* @apiSuccess (Success 200) {String}    data.nickname           Ник
* @apiSuccess (Success 200) {Object[]}  data.competences        Компетенции
* @apiSuccess (Success 200) {String}    data.competences.name   Наименование
* @apiSuccess (Success 200) {String}    data.competences.level  Уровень
* @apiSuccess (Success 200) {String}    message                 Поясняющее сообщение
* @apiError   (Error 404)   {String}    status                  Статус запроса
* @apiError   (Error 404)   {String}    error                   Поясняющее сообщение
* @apiError   (Error 404)   {Integer}    error_code              Код ошибки
* @apiError   (Error 404)   {String}    error_description       Описание ошибки
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 200 OK
        {
            "status": "success",
            "data": [
                {
                    "id": 2643,
                    "firstname": "Марк",
                    "lastname": "Багдасаров",
                    "farthername": null,
                    "photo": null,
                    "post": null,
                    "status": "ищу проект",
                    "nickname": "2643",
                    "competences": [
                        {
                        "name": "Разработчик С++",
                        "level": 1
                        }
                    ]
                },
                {
                    "id": 198635,
                    "firstname": "Нателла",
                    "lastname": "Стрельникова",
                    "farthername": "Наумовна",
                    "photo": null,
                    "post": null,
                    "status": "ищу команду",
                    "nickname": "198635",
                    "competences": [
                        {
                        "name": "Разработчик JS",
                        "level": 2
                        },
                        {
                        "name": "Веб-разработчик",
                        "level": 2
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
* @apiSuccess (Параметр) {Integer}      page                    Номер страницы           
* @apiSuccess (Параметр) {Integer}      limit                   Количество элементов
* @apiSuccess (Параметр) {String}       [fio]                   Поиск по фамилии и имени            
* @apiSuccess (Параметр) {String}       [status]                Поиск по статусу участника
* @apiSuccess (Success 200) {String}    status                  Статус запроса
* @apiSuccess (Success 200) {Object[]}  data                    Список с участниками
* @apiSuccess (Success 200) {Integer}    data.id                 ID
* @apiSuccess (Success 200) {String}    data.firstname          Имя
* @apiSuccess (Success 200) {String}    data.lastname           Фамилия
* @apiSuccess (Success 200) {String}    data.fathername         Отчество
* @apiSuccess (Success 200) {String}    data.photo              Фото
* @apiSuccess (Success 200) {String}    data.post               "Положение"
* @apiSuccess (Success 200) {String}    data.status             Статус
* @apiSuccess (Success 200) {String}    data.nickname           Ник
* @apiSuccess (Success 200) {Object[]}  data.competences        Компетенции
* @apiSuccess (Success 200) {String}    data.competences.name   Наименование
* @apiSuccess (Success 200) {String}    data.competences.level  Уровень
* @apiSuccess (Success 200) {String}    message                 Поясняющее сообщение
* @apiError   (Error 404)   {String}    status                  Статус запроса
* @apiError   (Error 404)   {String}    error                   Поясняющее сообщение
* @apiError   (Error 404)   {Integer}    error_code              Код ошибки
* @apiError   (Error 404)   {String}    error_description       Описание ошибки
* @apiSuccessExample {json} Success-Response:
        HTTP/1.1 200 OK
        {
            "status": "success",
            "data": [
                {
                    "id": 198635,
                    "firstname": "Нателла",
                    "lastname": "Стрельникова",
                    "farthername": "Наумовна",
                    "photo": null,
                    "post": null,
                    "status": "ищу команду",
                    "nickname": "198635",
                    "competences": [
                        {
                        "name": "Разработчик JS",
                        "level": 2
                        },
                        {
                        "name": "Веб-разработчик",
                        "level": 2
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
* @apiParam  {Integer} id   ID участника
* @apiSuccess (Success 200) {String}    status                  Статус запроса
* @apiSuccess (Success 200) {Object[]}  data                    Данные
* @apiSuccess (Success 200) {Object[]}  data.info               Информация аккаунта
* @apiSuccess (Success 200) {Integer}    data.info.id            ID
* @apiSuccess (Success 200) {String}    data.info.firstname     Имя
* @apiSuccess (Success 200) {String}    data.info.lastname      Фамилия
* @apiSuccess (Success 200) {String}    data.info.fathername    Отчество
* @apiSuccess (Success 200) {String}    data.info.photo         Фото
* @apiSuccess (Success 200) {String}    data.info.post          "Положение"
* @apiSuccess (Success 200) {String}    data.info.status        Статус
* @apiSuccess (Success 200) {String}    data.info.nickname      Ник
* @apiSuccess (Success 200) {Object[]}  data.contacts           Контакты
* @apiSuccess (Success 200) {Integer}    data.contacts.id        ID контакта
* @apiSuccess (Success 200) {String}    data.contacts.name      Наименование
* @apiSuccess (Success 200) {String}    data.contacts.url       URL
* @apiSuccess (Success 200) {Object[]}  data.competences        Компетенции
* @apiSuccess (Success 200) {Integer}    data.competences.id     ID
* @apiSuccess (Success 200) {String}    data.competences.name   Наименование
* @apiSuccess (Success 200) {Integer}    data.competences.level  Уровень
* @apiSuccess (Success 200) {Object[]}  data.projects           Проекты
* @apiSuccess (Success 200) {Integer}    data.projects.id        ID проекта
* @apiSuccess (Success 200) {String}    data.projects.name      Наименование
* @apiSuccess (Success 200) {String}    data.projects.category  Категория
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
                    "info": [
                        {
                            "id": 198635,
                            "firstname": "Нателла",
                            "lastname": "Стрельникова",
                            "farthername": "Наумовна",
                            "photo": null,
                            "post": null,
                            "status": null,
                            "nickname": "198635"
                        }
                    ],
                    "contacts": [
                        {
                            "id": 1,
                            "name": "LeaderID",
                            "url": "https://leader-id.ru/198635"
                        },
                        {
                            "id": 2,
                            "name": "Vkontakte",
                            "url": "https://vk.com/198635"
                        }
                    ],
                    "competences": [
                        {
                            "id": 3,
                            "name": "Разработчик JS",
                            "level": 2
                        },
                        {
                            "id": 8,
                            "name": "Веб-разработчик",
                            "level": 2
                        }
                    ],
                    "projects": [
                        {
                            "id": 2,
                            "name": "International",
                            "category": "IT"
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
* @api {put} http://api.flamingspace.sevsu.ru/users Обновить данные участника
* @apiName  PutUser
* @apiGroup User 
* @apiParam {Integer}    id                  ID
* @apiParam {String}    post                Положение"
* @apiParam {String}    status              Статус
* @apiParam {String}    nickname            Ник
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
* @api {delete} http://api.flamingspace.sevsu.ru/users Удалить информацию об участнике
* @apiName  DeleteUser
* @apiGroup User
* @apiParam {Integer}  id    ID участника
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
* @api {put} http://api.flamingspace.sevsu.ru/users/userid/contacts Добавить или обновить контакты участника
* @apiName  PutContact
* @apiGroup User 
* @apiParam {Integer}       userid                  ID участника
* @apiParam {Object[]}      contacts                Контакты
* @apiParam {Integer}       contactid               ID
* @apiParam {String}        url                     URL
* @apiParamExample {json} Request-Example:
    { 
        "contacts": [
            {
                "contactid": 2,
                "url": "http://url.ru"
            },
            {
                "contactid": 3,
                "url": "http://url_two.ru"
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
* @api {delete} http://api.flamingspace.sevsu.ru/users/userid/contacts Удалить контакты участника
* @apiName  DeleteContact
* @apiGroup User 
* @apiParam {Integer}        userid                  ID участника
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
        {
            "status": "No content"
        }
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
* @apiParam {Integer}        userid               ID участника
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
* @api {delete} http://api.flamingspace.sevsu.ru/users/userid/competences Удалить компетенции участника
* @apiName  DeleteCompetence
* @apiGroup User 
* @apiParam {Integer}        userid                  ID участника
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
        {
            "status": "No content"
        }
* @apiErrorExample {json} Error-Response:
        HTTP/1.1 404 NOT FOUND
        {
            status: 'error',
            error: 'api_error',
            error_code: 404,
            error_description: 'not found'
        }
*/
