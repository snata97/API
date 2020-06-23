define({ "api": [
  {
    "type": "delete",
    "url": "http://api.flamingspace.sevsu.ru/projects/edit/projectid/events",
    "title": "Удалить мероприятия проекта",
    "name": "DeleteEventProject",
    "group": "Project",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "projectid",
            "description": "<p>ID проекта</p>"
          },
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
          "content": "HTTP/1.1 204 No Content\n{\n    \"status\": \"No content\"\n}",
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
    "name": "DeleteEventProject",
    "group": "Project",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content\n{\n    \"status\": \"No content\"\n}",
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "projectid",
            "description": "<p>ID проекта</p>"
          },
          {
            "group": "Parameter",
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
          "content": "HTTP/1.1 204 No Content\n{\n    \"status\": \"success\"\n}",
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "projectid",
            "description": "<p>ID проекта</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "jobid",
            "description": "<p>ID вакансии</p>"
          },
          {
            "group": "Parameter",
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
          "content": "HTTP/1.1 204 No Content\n{\n    \"status\": \"No content\"\n}",
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "projectid",
            "description": "<p>ID проекта</p>"
          },
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
          "content": "HTTP/1.1 204 No Content\n{\n    \"status\": \"No content\"\n}",
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
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
            "type": "Object[]",
            "optional": false,
            "field": "data.participants",
            "description": "<p>Участники</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.participants.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.participants.firstname",
            "description": "<p>Имя</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.participants.lastname",
            "description": "<p>Фамилия</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.participants.fathername",
            "description": "<p>Отчество</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.participants.photo",
            "description": "<p>Фото</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.participants.jobs",
            "description": "<p>Работа участника в проекте</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.participants.name",
            "description": "<p>Наименование</p>"
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
            "field": "data.vacancies.id",
            "description": "<p>ID</p>"
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
            "type": "Integer",
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
            "description": "<p>ID</p>"
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
            "description": "<p>Дата проведения</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"data\": {\n        \"info\": [\n        {\n            \"id\": 3,\n            \"name\": \"Коробейники\",\n            \"category\": \"Культура\",\n            \"description\": \"Практический опыт показывает, что новая модель организационной деятельности способствует повышению актуальности форм воздействия? Разнообразный и богатый опыт выбранный нами инновационный путь требует от нас анализа системы масштабного изменения ряда параметров. Задача организации, в особенности же повышение уровня гражданского сознания представляет собой интересный эксперимент проверки системы обучения кадров, соответствующей насущным потребностям? Задача организации, в особенности же повышение уровня гражданского сознания позволяет выполнить важнейшие задания по разработке дальнейших направлений развитая системы массового участия. Не следует, однако, забывать о том, что новая модель организационной деятельности способствует повышению актуальности системы масштабного изменения ряда параметров. Соображения высшего порядка, а также повышение уровня гражданского сознания представляет собой интересный эксперимент проверки форм воздействия.\",\n            \"status\": \"набор\",\n            \"projectstart\": \"2020-06-14T21:00:00.000Z\",\n            \"projectend\": null\n        }\n        ],\n        \"participants\": [\n        {\n            \"id\": 2643,\n            \"firstname\": \"Марк\",\n            \"lastname\": \"Багдасаров\",\n            \"farthername\": null,\n            \"photo\": null,\n            \"jobs\": [\n            {\n                \"name\": \"Дизайнер\"\n            }\n            ]\n        }\n        ],\n        \"vacancies\": [\n            {\n                \"id\": 6,\n                \"name\": \"Разработчик С++\",\n                \"description\": \"Шестая вакансия\",\n                \"count\": 2\n            },\n            {\n                \"id\": 4,\n                \"name\": \"Менеджер\",\n                \"description\": \"Четвертая вакансия\",\n                \"count\": 1\n            }\n        ],\n        \"events\": [\n        \n        ]\n    },\n    \"message\": \"Информация о проекте\"\n    }",
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
            "field": "message",
            "description": "<p>Поясняющее сообщение</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ОК\n{\n    \"status\": \"success\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"name\": \"Иванушки\",\n            \"category\": \"IT\",\n            \"description\": \"Повседневная практика показывает, что сплочённость команды профессионалов требует определения и уточнения системы массового участия! Мы вынуждены отталкиваться от того, что сложившаяся структура организации, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для поэтапного и последовательного развития общества. Следует отметить, что базовый вектор развития однозначно определяет каждого участника как способного принимать собственные решения касаемо прогресса профессионального сообщества.\",\n            \"status\": \"набор\",\n            \"projectstart\": \"2020-05-29T21:00:00.000Z\",\n            \"projectend\": null,\n            \"vacancies\": [\n                {\n                \"name\": \"Разработчик JS\"\n                },\n                {\n                \"name\": \"Куратор\"\n                }\n            ]\n        },\n        {\n            \"id\": 3,\n            \"name\": \"Коробейники\",\n            \"category\": \"Культура\",\n            \"description\": \"Практический опыт показывает, что новая модель организационной деятельности способствует повышению актуальности форм воздействия? Разнообразный и богатый опыт выбранный нами инновационный путь требует от нас анализа системы масштабного изменения ряда параметров. Задача организации, в особенности же повышение уровня гражданского сознания представляет собой интересный эксперимент проверки системы обучения кадров, соответствующей насущным потребностям? Задача организации, в особенности же повышение уровня гражданского сознания позволяет выполнить важнейшие задания по разработке дальнейших направлений развитая системы массового участия. Не следует, однако, забывать о том, что новая модель организационной деятельности способствует повышению актуальности системы масштабного изменения ряда параметров. Соображения высшего порядка, а также повышение уровня гражданского сознания представляет собой интересный эксперимент проверки форм воздействия.\",\n            \"status\": \"набор\",\n            \"projectstart\": \"2020-06-14T21:00:00.000Z\",\n            \"projectend\": null,\n            \"vacancies\": [\n                {\n                \"name\": \"Разработчик JS\"\n                },\n                {\n                \"name\": \"Дизайнер\"\n                }\n            ]\n        }\n    ],\n    \"message\": \"Пользователи системы\"\n}",
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
    "success": {
      "fields": {
        "Параметр": [
          {
            "group": "Параметр",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>Номер страницы</p>"
          },
          {
            "group": "Параметр",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Количество элементов</p>"
          },
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
        ],
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
            "field": "message",
            "description": "<p>Поясняющее сообщение</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ОК\n{\n    \"status\": \"success\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"name\": \"Иванушки\",\n            \"category\": \"IT\",\n            \"description\": \"Повседневная практика показывает, что сплочённость команды профессионалов требует определения и уточнения системы массового участия! Мы вынуждены отталкиваться от того, что сложившаяся структура организации, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для поэтапного и последовательного развития общества. Следует отметить, что базовый вектор развития однозначно определяет каждого участника как способного принимать собственные решения касаемо прогресса профессионального сообщества.\",\n            \"status\": \"набор\",\n            \"projectstart\": \"2020-05-29T21:00:00.000Z\",\n            \"projectend\": null,\n            \"vacancies\": [\n                {\n                \"name\": \"Разработчик JS\"\n                },\n                {\n                \"name\": \"Куратор\"\n                }\n            ]\n        },\n        {\n            \"id\": 3,\n            \"name\": \"Коробейники\",\n            \"category\": \"Культура\",\n            \"description\": \"Практический опыт показывает, что новая модель организационной деятельности способствует повышению актуальности форм воздействия? Разнообразный и богатый опыт выбранный нами инновационный путь требует от нас анализа системы масштабного изменения ряда параметров. Задача организации, в особенности же повышение уровня гражданского сознания представляет собой интересный эксперимент проверки системы обучения кадров, соответствующей насущным потребностям? Задача организации, в особенности же повышение уровня гражданского сознания позволяет выполнить важнейшие задания по разработке дальнейших направлений развитая системы массового участия. Не следует, однако, забывать о том, что новая модель организационной деятельности способствует повышению актуальности системы масштабного изменения ряда параметров. Соображения высшего порядка, а также повышение уровня гражданского сознания представляет собой интересный эксперимент проверки форм воздействия.\",\n            \"status\": \"набор\",\n            \"projectstart\": \"2020-06-14T21:00:00.000Z\",\n            \"projectend\": null,\n            \"vacancies\": [\n                {\n                \"name\": \"Разработчик JS\"\n                },\n                {\n                \"name\": \"Дизайнер\"\n                }\n            ]\n        }\n    ],\n    \"message\": \"Пользователи системы\"\n}",
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "projectid",
            "description": "<p>ID проекта</p>"
          },
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
          "content": "HTTP/1.1 204 No Content\n{\n    \"status\": \"No content\"\n}",
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "userid",
            "description": "<p>ID создателя проекта</p>"
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "projectid",
            "description": "<p>ID проекта</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "jobid",
            "description": "<p>ID вакансии</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "userid",
            "description": "<p>ID участника</p>"
          },
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "projectid",
            "description": "<p>ID проекта</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "vacancyid",
            "description": "<p>ID вакансии</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "userid",
            "description": "<p>ID участника</p>"
          },
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "projectid",
            "description": "<p>ID проекта</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "userid",
            "description": "<p>ID участника</p>"
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
          "content": "HTTP/1.1 204 No Content\n{\n    \"status\": \"success\"\n}",
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "projectid",
            "description": "<p>ID проекта</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "jobid",
            "description": "<p>ID вакансии</p>"
          },
          {
            "group": "Parameter",
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
          "content": "HTTP/1.1 204 No Content\n{\n    \"status\": \"No content\"\n}",
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "projectid",
            "description": "<p>ID проекта</p>"
          },
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
          "content": "HTTP/1.1 204 No Content\n{\n    \"status\": \"No content\"\n}",
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "userid",
            "description": "<p>ID участника</p>"
          },
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
          "content": "HTTP/1.1 204 No Content\n{\n    \"status\": \"No content\"\n}",
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "userid",
            "description": "<p>ID участника</p>"
          },
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
          "content": "HTTP/1.1 204 No Content\n{\n    \"status\": \"No content\"\n}",
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
        "Parameter": [
          {
            "group": "Parameter",
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
          "content": "HTTP/1.1 204 No Content\n{\n    \"status\": \"No content\"\n}",
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
        "Parameter": [
          {
            "group": "Parameter",
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
            "field": "data.info.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.info.firstname",
            "description": "<p>Имя</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.info.lastname",
            "description": "<p>Фамилия</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.info.fathername",
            "description": "<p>Отчество</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.info.photo",
            "description": "<p>Фото</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.info.post",
            "description": "<p>&quot;Положение&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.info.status",
            "description": "<p>Статус</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.info.nickname",
            "description": "<p>Ник</p>"
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
            "type": "Integer",
            "optional": false,
            "field": "data.contacts.id",
            "description": "<p>ID контакта</p>"
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
            "field": "data.competences",
            "description": "<p>Компетенции</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.competences.id",
            "description": "<p>ID</p>"
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
            "type": "Integer",
            "optional": false,
            "field": "data.competences.level",
            "description": "<p>Уровень</p>"
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
            "description": "<p>ID проекта</p>"
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
            "type": "String",
            "optional": false,
            "field": "data.projects.category",
            "description": "<p>Категория</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"data\": {\n            \"info\": [\n                {\n                    \"id\": 198635,\n                    \"firstname\": \"Нателла\",\n                    \"lastname\": \"Стрельникова\",\n                    \"farthername\": \"Наумовна\",\n                    \"photo\": null,\n                    \"post\": null,\n                    \"status\": null,\n                    \"nickname\": \"198635\"\n                }\n            ],\n            \"contacts\": [\n                {\n                    \"id\": 1,\n                    \"name\": \"LeaderID\",\n                    \"url\": \"https://leader-id.ru/198635\"\n                },\n                {\n                    \"id\": 2,\n                    \"name\": \"Vkontakte\",\n                    \"url\": \"https://vk.com/198635\"\n                }\n            ],\n            \"competences\": [\n                {\n                    \"id\": 3,\n                    \"name\": \"Разработчик JS\",\n                    \"level\": 2\n                },\n                {\n                    \"id\": 8,\n                    \"name\": \"Веб-разработчик\",\n                    \"level\": 2\n                }\n            ],\n            \"projects\": [\n                {\n                    \"id\": 2,\n                    \"name\": \"International\",\n                    \"category\": \"IT\"\n                }\n            ]\n    },\n    \"message\": \"Информация о пользователе\"\n}",
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
            "type": "String",
            "optional": false,
            "field": "data.competences.level",
            "description": "<p>Уровень</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"data\": [\n        {\n            \"id\": 2643,\n            \"firstname\": \"Марк\",\n            \"lastname\": \"Багдасаров\",\n            \"farthername\": null,\n            \"photo\": url,\n            \"post\": null,\n            \"status\": \"ищу проект\",\n            \"nickname\": \"2643\",\n            \"competences\": [\n                {\n                \"name\": \"Разработчик С++\",\n                \"level\": 1\n                }\n            ]\n        },\n        {\n            \"id\": 198635,\n            \"firstname\": \"Нателла\",\n            \"lastname\": \"Стрельникова\",\n            \"farthername\": \"Наумовна\",\n            \"photo\": url,\n            \"post\": null,\n            \"status\": \"ищу команду\",\n            \"nickname\": \"198635\",\n            \"competences\": [\n                {\n                \"name\": \"Разработчик JS\",\n                \"level\": 2\n                },\n                {\n                \"name\": \"Веб-разработчик\",\n                \"level\": 2\n                }\n            ]\n        }\n    ],\n    \"message\": \"Пользователи системы\"\n}",
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
    "success": {
      "fields": {
        "Параметр": [
          {
            "group": "Параметр",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>Номер страницы</p>"
          },
          {
            "group": "Параметр",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Количество элементов</p>"
          },
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
        ],
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
            "type": "String",
            "optional": false,
            "field": "data.competences.level",
            "description": "<p>Уровень</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n    \"data\": [\n        {\n            \"id\": 198635,\n            \"firstname\": \"Нателла\",\n            \"lastname\": \"Стрельникова\",\n            \"farthername\": \"Наумовна\",\n            \"photo\": null,\n            \"post\": null,\n            \"status\": \"ищу команду\",\n            \"nickname\": \"198635\",\n            \"competences\": [\n                {\n                \"name\": \"Разработчик JS\",\n                \"level\": 2\n                },\n                {\n                \"name\": \"Веб-разработчик\",\n                \"level\": 2\n                }\n            ]\n        }\n    ],\n    \"message\": \"Пользователи системы\"\n}",
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "userid",
            "description": "<p>ID участника</p>"
          },
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
          "content": "HTTP/1.1 204 No Content\n{\n    \"status\": \"No content\"\n}",
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "userid",
            "description": "<p>ID участника</p>"
          },
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
          "content": "{ \n    \"contacts\": [\n        {\n            \"contactid\": 2,\n            \"url\": \"http://url.ru\"\n        },\n        {\n            \"contactid\": 3,\n            \"url\": \"http://url_two.ru\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content\n{\n    \"status\": \"No content\"\n}",
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
            "field": "post",
            "description": "<p>Положение&quot;</p>"
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
          "content": "HTTP/1.1 204 No Content\n{\n    \"status\": \"No content\"\n}",
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