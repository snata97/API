define({ "api": [
  {
    "type": "delete",
    "url": "http://api.flamingspace.sevsu.ru/projects/edit/projectid/events",
    "title": "Удалить мероприятия проекта",
    "name": "DeleteEventProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Параметры маршрута": [
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "projectid",
            "description": "<p>ID проекта</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID мероприятия</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: error message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/projects.js",
    "groupTitle": "Project"
  },
  {
    "type": "delete",
    "url": "http://api.flamingspace.sevsu.ru/projects/edit/projectid/userid",
    "title": "Удалить проект",
    "name": "DeleteProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Параметры маршрута": [
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "projectid",
            "description": "<p>ID проекта</p>"
          },
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "userid",
            "description": "<p>ID участника</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: error message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/projects.js",
    "groupTitle": "Project"
  },
  {
    "type": "delete",
    "url": "http://api.flamingspace.sevsu.ru/projects/projectid/jobs/jobid/userid",
    "title": "Исключить участника из проекта",
    "name": "DeleteProjectJobAccount",
    "group": "Project",
    "parameter": {
      "fields": {
        "Параметры маршрута": [
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "projectid",
            "description": "<p>ID проекта</p>"
          },
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "jobid",
            "description": "<p>ID вакансии</p>"
          },
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "userid",
            "description": "<p>ID участника</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: error message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/projects.js",
    "groupTitle": "Project"
  },
  {
    "type": "delete",
    "url": "http://api.flamingspace.sevsu.ru/projects/edit/projectid/vacancies/vacancyid/userid",
    "title": "Удалить заявку на вакансию в проекте",
    "name": "DeleteProjectVacancyAccount",
    "group": "Project",
    "parameter": {
      "fields": {
        "Параметры маршрута": [
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "projectid",
            "description": "<p>ID проекта</p>"
          },
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "vacancyid",
            "description": "<p>ID вакансии</p>"
          },
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "userid",
            "description": "<p>ID участника</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: error message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/projects.js",
    "groupTitle": "Project"
  },
  {
    "type": "delete",
    "url": "http://api.flamingspace.sevsu.ru/projects/edit/projectid/vacancies",
    "title": "Удалить вакансии проекта",
    "name": "DeleteVacancyProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Параметры маршрута": [
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "projectid",
            "description": "<p>ID проекта</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "vacancies",
            "description": "<p>Вакансии</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID вакансии</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Delete-Example:",
          "content": "{\n    \"vacancies\":[\n        {\n            \"id\":4\n        },\n        {\n            \"id\":5\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: error message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/projects.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "http://api.flamingspace.sevsu.ru/projects/id",
    "title": "Получить проект по ID",
    "name": "GetProjectID",
    "group": "Project",
    "parameter": {
      "fields": {
        "Параметры маршрута": [
          {
            "group": "Параметры маршрута",
            "optional": false,
            "field": "id",
            "description": "<p>ID проекта</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Статус запроса</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Данные</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.category",
            "description": "<p>Категория</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.subcategory",
            "description": "<p>Подкатегория</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.description",
            "description": "<p>Описание</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.status",
            "description": "<p>Статус</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.projectstart",
            "description": "<p>Дата начала проекта</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.projectend",
            "description": "<p>Дата окончания проекта</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.adminid",
            "description": "<p>Id администратора проекта</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.accounts",
            "description": "<p>Аккаунты</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.accounts.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.accounts.firstname",
            "description": "<p>Имя</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.accounts.lastname",
            "description": "<p>Фамилия</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.accounts.fathername",
            "description": "<p>Отчество</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.accounts.photo",
            "description": "<p>Фото</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.accounts.jobs",
            "description": "<p>Позиция в проекте</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.accounts.name",
            "description": "<p>Наименование позиции</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.vacancies",
            "description": "<p>Вакансии</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.vacancies.name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.vacancies.description",
            "description": "<p>Описание</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.vacancies.count",
            "description": "<p>Количество</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.events",
            "description": "<p>Мероприятия</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.events.id",
            "description": "<p>ID мероприятия</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.events.name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.events.photo",
            "description": "<p>Фото</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.events.date",
            "description": "<p>Дата</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Поясняющее сообщение</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"data\": {\n            \"id\": id,\n            \"name\": \"name\",\n            \"subcategory\": \"subcategory\",\n            \"category\": \"category\",\n            \"description\": \"description\",\n            \"status\": \"status\",\n            \"projectstart\": \"yyyy-mm-dd\",\n            \"projectend\": \"yyyy-mm-dd\",\n            \"adminid\": id,\n            \"accounts\": [\n                {\n                \"id\": id,\n                \"firstname\": \"firstname\",\n                \"lastname\": \"lastname\",\n                \"fathername\": \"fathername\",\n                \"photo\": \"url\",\n                \"jobs\": [\n                    {\n                    \"name\": \"name\"\n                    }\n                ],\n                \"date\": \"yyyy-mm-dd\"\n                }\n            ],\n            \"vacancies\": [\n                {\n                \"name\": \"name\",\n                \"description\": \"description\",\n                \"count\": 4\n                }\n            ],\n            \"events\": [\n                {\n                \"id\": id,\n                \"name\": \"name\",\n                \"photo\": \"photo_url\",\n                \"date\": \"yyyy-mm-dd\"\n                }\n            ]\n    },\n    \"message\": \"Информация о проекте\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Статус запроса</p>"
          },
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Поясняющее сообщение</p>"
          },
          {
            "group": "Error 404",
            "type": "Integer",
            "optional": false,
            "field": "error_code",
            "description": "<p>Код ошибки</p>"
          },
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Описание ошибки</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: \"Не найден проект\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/projects.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "http://api.flamingspace.sevsu.ru/projects",
    "title": "Получить проекты",
    "name": "GetProjects",
    "group": "Project",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Статус запроса</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Список с проектами</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.category",
            "description": "<p>Категория</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.subcategory",
            "description": "<p>Подкатегория</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.description",
            "description": "<p>Описание</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.status",
            "description": "<p>Статус</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.projectstart",
            "description": "<p>Дата начала проекта</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.projectend",
            "description": "<p>Дата окончания проекта</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.adminid",
            "description": "<p>Id администратора проекта</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.accounts",
            "description": "<p>Аккаунты</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.accounts.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.accounts.firstname",
            "description": "<p>Имя</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.accounts.lastname",
            "description": "<p>Фамилия</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.accounts.fathername",
            "description": "<p>Отчество</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.accounts.photo",
            "description": "<p>Фото</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.accounts.jobs",
            "description": "<p>Позиция в проекте</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.accounts.name",
            "description": "<p>Наименование позиции</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.vacancies",
            "description": "<p>Вакансии</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.vacancies.name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.vacancies.description",
            "description": "<p>Описание</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.vacancies.count",
            "description": "<p>Количество</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.events",
            "description": "<p>Мероприятия</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.events.id",
            "description": "<p>ID мероприятия</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.events.name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.events.photo",
            "description": "<p>Фото</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.events.date",
            "description": "<p>Дата</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Поясняющее сообщение</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ОК\n{\n    \"status\": \"success\",\n    \"data\": [\n        {\n            \"id\": id,\n            \"name\": \"name\",\n            \"subcategory\": \"subcategory\",\n            \"category\": \"category\",\n            \"description\": \"description\",\n            \"status\": \"status\",\n            \"projectstart\": \"yyyy-mm-dd\",\n            \"projectend\": \"yyyy-mm-dd\",\n            \"adminid\": id,\n            \"accounts\": [\n                {\n                \"id\": id,\n                \"firstname\": \"firstname\",\n                \"lastname\": \"lastname\",\n                \"fathername\": \"fathername\",\n                \"photo\": \"url\",\n                \"jobs\": [\n                    {\n                    \"name\": \"name\"\n                    }\n                ],\n                \"date\": \"yyyy-mm-dd\"\n                }\n            ],\n            \"vacancies\": [\n                {\n                \"name\": \"name\",\n                \"description\": \"description\",\n                \"count\": 4\n                }\n            ],\n            \"events\": [\n                {\n                \"id\": id,\n                \"name\": \"name\",\n                \"photo\": \"photo_url\",\n                \"date\": \"yyyy-mm-dd\"\n                }\n            ]\n            }\n    ],\n    \"message\": \"Проекты системы\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Статус запроса</p>"
          },
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Поясняющее сообщение</p>"
          },
          {
            "group": "Error 404",
            "type": "Integer",
            "optional": false,
            "field": "error_code",
            "description": "<p>Код ошибки</p>"
          },
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Описание ошибки</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: error message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/projects.js",
    "groupTitle": "Project"
  },
  {
    "type": "get",
    "url": "http://api.flamingspace.sevsu.ru/projects/page/limit",
    "title": "Получить проекты постранично и с фильтрацией",
    "name": "GetProjectsFilter",
    "group": "Project",
    "parameter": {
      "fields": {
        "Параметры маршрута": [
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>Номер страницы</p>"
          },
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Количество элементов</p>"
          }
        ],
        "Параметр": [
          {
            "group": "Параметр",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Поиск по наименованию</p>"
          },
          {
            "group": "Параметр",
            "type": "String",
            "optional": true,
            "field": "category",
            "description": "<p>Поиск по категории</p>"
          },
          {
            "group": "Параметр",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>Поиск по статусу</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Статус запроса</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Список с проектами</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.category",
            "description": "<p>Категория</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.subcategory",
            "description": "<p>Подкатегория</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.description",
            "description": "<p>Описание</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.status",
            "description": "<p>Статус</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.projectstart",
            "description": "<p>Дата начала проекта</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.projectend",
            "description": "<p>Дата окончания проекта</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.adminid",
            "description": "<p>Id администратора проекта</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.accounts",
            "description": "<p>Аккаунты</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.accounts.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.accounts.firstname",
            "description": "<p>Имя</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.accounts.lastname",
            "description": "<p>Фамилия</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.accounts.fathername",
            "description": "<p>Отчество</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.accounts.photo",
            "description": "<p>Фото</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.accounts.jobs",
            "description": "<p>Позиция в проекте</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.accounts.name",
            "description": "<p>Наименование позиции</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.vacancies",
            "description": "<p>Вакансии</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.vacancies.name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.vacancies.description",
            "description": "<p>Описание</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.vacancies.count",
            "description": "<p>Количество</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.events",
            "description": "<p>Мероприятия</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.events.id",
            "description": "<p>ID мероприятия</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.events.name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.events.photo",
            "description": "<p>Фото</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.events.date",
            "description": "<p>Дата</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Поясняющее сообщение</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ОК\n{\n    \"status\": \"success\",\n    \"data\": [\n        {\n            \"id\": id,\n            \"name\": \"name\",\n            \"subcategory\": \"subcategory\",\n            \"category\": \"category\",\n            \"description\": \"description\",\n            \"status\": \"status\",\n            \"projectstart\": \"yyyy-mm-dd\",\n            \"projectend\": \"yyyy-mm-dd\",\n            \"adminid\": id,\n            \"accounts\": [\n                {\n                \"id\": id,\n                \"firstname\": \"firstname\",\n                \"lastname\": \"lastname\",\n                \"fathername\": \"fathername\",\n                \"photo\": \"url\",\n                \"jobs\": [\n                    {\n                    \"name\": \"name\"\n                    }\n                ],\n                \"date\": \"yyyy-mm-dd\"\n                }\n            ],\n            \"vacancies\": [\n                {\n                \"name\": \"name\",\n                \"description\": \"description\",\n                \"count\": 4\n                }\n            ],\n            \"events\": [\n                {\n                \"id\": id,\n                \"name\": \"name\",\n                \"photo\": \"photo_url\",\n                \"date\": \"yyyy-mm-dd\"\n                }\n            ]\n        }\n    ],\n    \"message\": \"Пользователи системы\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Статус запроса</p>"
          },
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Поясняющее сообщение</p>"
          },
          {
            "group": "Error 404",
            "type": "Integer",
            "optional": false,
            "field": "error_code",
            "description": "<p>Код ошибки</p>"
          },
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Описание ошибки</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: error message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/projects.js",
    "groupTitle": "Project"
  },
  {
    "type": "post",
    "url": "http://api.flamingspace.sevsu.ru/projects/edit/projectid/events",
    "title": "Добавить мероприятие к проекту",
    "name": "PostEventProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Параметры маршрута": [
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "projectid",
            "description": "<p>ID проекта</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID мероприятия</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Фотография мероприятия</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Дата проведения мерояприятия</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \n    \"id\": 52082,\n    \"name\": \"Что делать с собой завтра? Вебинар для выпускников СевГУ\",\n    \"photo\": \"photo_url\",\n    \"date\": \"09-05-2020\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: error message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/projects.js",
    "groupTitle": "Project"
  },
  {
    "type": "post",
    "url": "http://api.flamingspace.sevsu.ru/projects/edit/userid",
    "title": "Создать проект",
    "name": "PostProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Параметры маршрута": [
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "userid",
            "description": "<p>ID создателя проекта</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Категория</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Описание</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Статус</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "projectstart",
            "description": "<p>Дата начала проекта</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "projectend",
            "description": "<p>Дата окончания проекта</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"status\": \"created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: error message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/projects.js",
    "groupTitle": "Project"
  },
  {
    "type": "post",
    "url": "http://api.flamingspace.sevsu.ru/projects/projectid/jobs/jobid/userid",
    "title": "Присвоить участнику должность в проекте",
    "name": "PostProjectJobAccount",
    "group": "Project",
    "parameter": {
      "fields": {
        "Параметры маршрута": [
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "projectid",
            "description": "<p>ID проекта</p>"
          },
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "jobid",
            "description": "<p>ID вакансии</p>"
          },
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "userid",
            "description": "<p>ID участника</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Дата отправки</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"status\": \"created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: error message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/projects.js",
    "groupTitle": "Project"
  },
  {
    "type": "post",
    "url": "http://api.flamingspace.sevsu.ru/projects/edit/projectid/vacancies/vacancyid/userid",
    "title": "Отправить заявку на вакансию в проекте",
    "name": "PostProjectVacancyAccount",
    "group": "Project",
    "parameter": {
      "fields": {
        "Параметры маршрута": [
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "projectid",
            "description": "<p>ID проекта</p>"
          },
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "vacancyid",
            "description": "<p>ID вакансии</p>"
          },
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "userid",
            "description": "<p>ID участника</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Дата отправки</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>Сообщение</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"status\": \"created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: error message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/projects.js",
    "groupTitle": "Project"
  },
  {
    "type": "put",
    "url": "http://api.flamingspace.sevsu.ru/projects/edit/projectid/userid",
    "title": "Обновить проект",
    "name": "PutProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Параметры маршрута": [
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "projectid",
            "description": "<p>ID проекта</p>"
          },
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "userid",
            "description": "<p>ID участника</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Категория</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Описание</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Статус</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "projectstart",
            "description": "<p>Дата начала проекта</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "projectend",
            "description": "<p>Дата окончания проекта</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: error message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/projects.js",
    "groupTitle": "Project"
  },
  {
    "type": "put",
    "url": "http://api.flamingspace.sevsu.ru/projects/projectid/jobs/jobid/userid",
    "title": "Изменить должность участника в проекте",
    "name": "PutProjectJobAccount",
    "group": "Project",
    "parameter": {
      "fields": {
        "Параметры маршрута": [
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "projectid",
            "description": "<p>ID проекта</p>"
          },
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "jobid",
            "description": "<p>ID вакансии</p>"
          },
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "userid",
            "description": "<p>ID участника</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: error message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/projects.js",
    "groupTitle": "Project"
  },
  {
    "type": "put",
    "url": "http://api.flamingspace.sevsu.ru/projects/edit/projectid/vacancies",
    "title": "Добавить или обновить вакансию проекта",
    "name": "PutVacancyProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Параметры маршрута": [
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "projectid",
            "description": "<p>ID проекта</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "vacancies",
            "description": "<p>Вакансии</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>ID вакансии</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "jobid",
            "description": "<p>ID работы проекта</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "count",
            "description": "<p>Количество свободных мест работы</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Update-Example:",
          "content": "{\n    \"vacancies\":[\n        {\n            \"id\": 4,\n            \"jobid\": 4,\n            \"count\": 3\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: error message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/projects.js",
    "groupTitle": "Project"
  },
  {
    "type": "delete",
    "url": "http://api.flamingspace.sevsu.ru/users/userid/competences",
    "title": "Удалить компетенции участника",
    "name": "DeleteCompetence",
    "group": "User",
    "parameter": {
      "fields": {
        "Параметры маршрута": [
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "userid",
            "description": "<p>ID участника</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "competences",
            "description": "<p>Компетенции</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "competenceid",
            "description": "<p>ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \n    \"competences\": [\n        {\n            \"competenceid\": 1\n        },\n        {\n            \"competenceid\": 2\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: 'not found'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/users.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "http://api.flamingspace.sevsu.ru/users/userid/contacts",
    "title": "Удалить контакты участника",
    "name": "DeleteContact",
    "group": "User",
    "parameter": {
      "fields": {
        "Параметры маршрута": [
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "userid",
            "description": "<p>ID участника</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "contacts",
            "description": "<p>Контакты</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "contactid",
            "description": "<p>ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \n    \"contacts\": [\n        {\n            \"contactid\": 2\n        },\n        {\n            \"contactid\": 3\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: 'not found'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/users.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "http://api.flamingspace.sevsu.ru/users/id",
    "title": "Удалить информацию об участнике",
    "name": "DeleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Параметры маршрута": [
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID участника</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: error message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "http://api.flamingspace.sevsu.ru/users/id",
    "title": "Получить информацию пользователя по ID",
    "name": "GetUserID",
    "group": "User",
    "parameter": {
      "fields": {
        "Параметры маршрута": [
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID участника</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Статус запроса</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Данные</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.info",
            "description": "<p>Информация аккаунта</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.firstname",
            "description": "<p>Имя</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.lastname",
            "description": "<p>Фамилия</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.fathername",
            "description": "<p>Отчество</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.photo",
            "description": "<p>Фото</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.post",
            "description": "<p>&quot;Положение&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.status",
            "description": "<p>Статус</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.nickname",
            "description": "<p>Ник</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.competences",
            "description": "<p>Компетенции</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.competences.name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.contacts",
            "description": "<p>Контакты</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.contacts.name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.contacts.url",
            "description": "<p>URL</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.projects",
            "description": "<p>Проекты</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.projects.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.projects.name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.events",
            "description": "<p>Мероприятия</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.events.id",
            "description": "<p>ID мероприятия</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.events.projectID",
            "description": "<p>ID проекта</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.events.name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.events.photo",
            "description": "<p>Фото</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.events.date",
            "description": "<p>Дата</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Поясняющее сообщение</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"data\": {\n            \"id\": id,\n            \"firstname\": \"firstname\",\n            \"lastname\": \"lastname\",\n            \"farthername\": \"farthername\",\n            \"photo\": url,\n            \"post\": \"post\",\n            \"status\": \"status\",\n            \"nickname\": \"nickname\",\n            \"competences\": [\n                {\n                \"name\": name\n                }\n            ],\n            \"contacts\": [\n                {\n                \"name\": \"name\",\n                \"url\": \"url\"\n                }\n                }\n            ],\n            \"projects\": [\n                {\n                \"id\": id,\n                \"name\": \"name\"\n                }\n            ],\n            \"events\": [\n                {\n                \"id\": id,\n                \"projectID\": id,\n                \"name\": \"name\",\n                \"photo\": \"photo_url\",\n                \"date\": \"yyyy-mm-dd\"\n                }\n            ]\n        },\n    \"message\": \"Информация о пользователе\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Статус запроса</p>"
          },
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Поясняющее сообщение</p>"
          },
          {
            "group": "Error 404",
            "type": "Integer",
            "optional": false,
            "field": "error_code",
            "description": "<p>Код ошибки</p>"
          },
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Описание ошибки</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: \"Не найден пользователь с Leader-ID: Id\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "http://api.flamingspace.sevsu.ru/users",
    "title": "Получить пользователей системы",
    "name": "GetUsers",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Статус запроса</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Список с участниками</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.firstname",
            "description": "<p>Имя</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.lastname",
            "description": "<p>Фамилия</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.fathername",
            "description": "<p>Отчество</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.photo",
            "description": "<p>Фото</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.post",
            "description": "<p>&quot;Положение&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.status",
            "description": "<p>Статус</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.nickname",
            "description": "<p>Ник</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.competences",
            "description": "<p>Компетенции</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.competences.name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.contacts",
            "description": "<p>Контакты</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.contacts.name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.contacts.url",
            "description": "<p>URL</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.projects",
            "description": "<p>Проекты</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.projects.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.projects.name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.events",
            "description": "<p>Мероприятия</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.events.id",
            "description": "<p>ID мероприятия</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.events.projectID",
            "description": "<p>ID проекта</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.events.name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.events.photo",
            "description": "<p>Фото</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.events.date",
            "description": "<p>Дата</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Поясняющее сообщение</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"data\": [\n        {\n            \"id\": id,\n            \"firstname\": \"firstname\",\n            \"lastname\": \"lastname\",\n            \"farthername\": \"farthername\",\n            \"photo\": url,\n            \"post\": \"post\",\n            \"status\": \"status\",\n            \"nickname\": \"nickname\",\n            \"competences\": [\n                {\n                \"name\": name\n                }\n            ],\n            \"contacts\": [\n                {\n                \"name\": \"name\",\n                \"url\": \"url\"\n                }\n                }\n            ],\n            \"projects\": [\n                {\n                \"id\": id,\n                \"name\": \"name\"\n                }\n            ],\n            \"events\": [\n                {\n                \"id\": id,\n                \"projectID\": id,\n                \"name\": \"name\",\n                \"photo\": \"photo_url\",\n                \"date\": \"yyyy-mm-dd\"\n                }\n            ]\n        }\n    ],\n    \"message\": \"Пользователи системы\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Статус запроса</p>"
          },
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Поясняющее сообщение</p>"
          },
          {
            "group": "Error 404",
            "type": "Integer",
            "optional": false,
            "field": "error_code",
            "description": "<p>Код ошибки</p>"
          },
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Описание ошибки</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: error message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "http://api.flamingspace.sevsu.ru/users/page/limit",
    "title": "Получить пользователей постранично и с фильтрацией",
    "name": "GetUsersFilter",
    "group": "User",
    "parameter": {
      "fields": {
        "Параметры маршрута": [
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>Номер страницы</p>"
          },
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Количество элементов</p>"
          }
        ],
        "Параметр": [
          {
            "group": "Параметр",
            "type": "String",
            "optional": true,
            "field": "fio",
            "description": "<p>Поиск по фамилии и имени</p>"
          },
          {
            "group": "Параметр",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>Поиск по статусу участника</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Статус запроса</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Список с участниками</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.firstname",
            "description": "<p>Имя</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.lastname",
            "description": "<p>Фамилия</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.fathername",
            "description": "<p>Отчество</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.photo",
            "description": "<p>Фото</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.post",
            "description": "<p>&quot;Положение&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.status",
            "description": "<p>Статус</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.nickname",
            "description": "<p>Ник</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.competences",
            "description": "<p>Компетенции</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.competences.name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.contacts",
            "description": "<p>Контакты</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.contacts.name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.contacts.url",
            "description": "<p>URL</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.projects",
            "description": "<p>Проекты</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.projects.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.projects.name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.events",
            "description": "<p>Мероприятия</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.events.id",
            "description": "<p>ID мероприятия</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.events.projectID",
            "description": "<p>ID проекта</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.events.name",
            "description": "<p>Наименование</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.events.photo",
            "description": "<p>Фото</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.events.date",
            "description": "<p>Дата</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Поясняющее сообщение</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"data\": [\n        {\n            \"id\": id,\n            \"firstname\": \"firstname\",\n            \"lastname\": \"lastname\",\n            \"farthername\": \"farthername\",\n            \"photo\": url,\n            \"post\": \"post\",\n            \"status\": \"status\",\n            \"nickname\": \"nickname\",\n            \"competences\": [\n                {\n                \"name\": name\n                }\n            ],\n            \"contacts\": [\n                {\n                \"name\": \"name\",\n                \"url\": \"url\"\n                }\n                }\n            ],\n            \"projects\": [\n                {\n                \"id\": id,\n                \"name\": \"name\"\n                }\n            ],\n            \"events\": [\n                {\n                \"id\": id,\n                \"projectID\": id,\n                \"name\": \"name\",\n                \"photo\": \"photo_url\",\n                \"date\": \"yyyy-mm-dd\"\n                }\n            ]\n        }\n    ],\n    \"message\": \"Пользователи системы\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Статус запроса</p>"
          },
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Поясняющее сообщение</p>"
          },
          {
            "group": "Error 404",
            "type": "Integer",
            "optional": false,
            "field": "error_code",
            "description": "<p>Код ошибки</p>"
          },
          {
            "group": "Error 404",
            "type": "String",
            "optional": false,
            "field": "error_description",
            "description": "<p>Описание ошибки</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: error message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "http://api.flamingspace.sevsu.ru/users",
    "title": "Добавить участника",
    "name": "PostUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Имя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Фамилия</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fathername",
            "description": "<p>Отчество</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "photo",
            "description": "<p>Фото</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "post",
            "description": "<p>&quot;Положение&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>Статус</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>Ник</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"status\": \"created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: error message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "http://api.flamingspace.sevsu.ru/users/userid/competences",
    "title": "Добавить или обновить компетенции участника",
    "name": "PutCompetence",
    "group": "User",
    "parameter": {
      "fields": {
        "Параметры маршрута": [
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "userid",
            "description": "<p>ID участника</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "competences",
            "description": "<p>Компетенции</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "competenceid",
            "description": "<p>ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "level",
            "description": "<p>Уровень</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \n    \"competences\": [\n        {\n            \"competenceid\": 1,\n            \"level\": 1\n        },\n        {\n            \"competenceid\": 2,\n            \"level\": 3\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: error message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "http://api.flamingspace.sevsu.ru/users/userid/contacts",
    "title": "Добавить или обновить контакты участника",
    "name": "PutContact",
    "group": "User",
    "parameter": {
      "fields": {
        "Параметры маршрута": [
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "userid",
            "description": "<p>ID участника</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "contacts",
            "description": "<p>Контакты</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "contactid",
            "description": "<p>ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \n    \"contacts\": [\n        {\n            \"contactid\": 2,\n            \"url\": \"url\"\n        },\n        {\n            \"contactid\": 3,\n            \"url\": \"url\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: error message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "http://api.flamingspace.sevsu.ru/users/id",
    "title": "Обновить данные участника",
    "name": "PutUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Параметры маршрута": [
          {
            "group": "Параметры маршрута",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "post",
            "description": "<p>&quot;Положение&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Статус</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>Ник</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    status: 'error',\n    error: 'api_error',\n    error_code: 404,\n    error_description: error message\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./doc/documentation/users.js",
    "groupTitle": "User"
  }
] });
