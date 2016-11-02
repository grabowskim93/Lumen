define({ "api": [
  {
    "type": "post",
    "url": "calendar",
    "title": "Create calendar with tasks",
    "sampleRequest": [
      {
        "url": "http://52.212.191.40/API/api/public/index.php/api/v1/calendar"
      }
    ],
    "name": "Ceate_calendar_with_tasks",
    "group": "API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>Date: yyyy-mm-dd.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>Type: work | holiday.</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "tasks",
            "description": "<p>Tasks: [taks1, task2].</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "object",
            "description": "<p>Day.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"date\": \"2016-11-29\",\n  \"type\": \"work\",\n  \"id\": 1,\n  \"tasks\": [\n    {\n      \"id\": 1,\n      \"calendar_id\": 1,\n      \"name\": \"Zrobić zadanie\",\n      \"completed\": 0,\n      \"created_at\": \"2016-11-02\"\n    },\n    {\n      \"id\": 2,\n      \"calendar_id\": 1,\n      \"name\": \"drugie zadanie\",\n      \"completed\": 0,\n      \"created_at\": \"2016-11-02\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Input/API/addCalendar.js",
    "groupTitle": "API"
  },
  {
    "type": "get",
    "url": "calendarByDate?from=2016-01-11&to=2016-12-20",
    "title": "Get days with tasks",
    "sampleRequest": [
      {
        "url": "http://52.212.191.40/API/api/public/index.php/api/v1/calendarByDate"
      }
    ],
    "name": "Get_days_with_tasks_from_selected_interval",
    "group": "API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "from",
            "description": "<p>From: yyyy-mm-dd.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "to",
            "description": "<p>To: yyyy-mm-dd.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "object",
            "description": "<p>Days.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"date\": \"2016-11-29\",\n  \"type\": \"work\",\n  \"id\": 1,\n  \"tasks\": [\n    {\n      \"id\": 1,\n      \"calendar_id\": 1,\n      \"name\": \"Zrobić zadanie\",\n      \"completed\": 0,\n      \"created_at\": \"2016-11-02\"\n    },\n    {\n      \"id\": 2,\n      \"calendar_id\": 1,\n      \"name\": \"drugie zadanie\",\n      \"completed\": 0,\n      \"created_at\": \"2016-11-02\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Input/API/getCalendar.js",
    "groupTitle": "API"
  },
  {
    "type": "get",
    "url": "task/{id}",
    "title": "Mark task as completed",
    "sampleRequest": [
      {
        "url": "http://52.212.191.40/API/api/public/index.php/api/v1/task/{id}"
      }
    ],
    "name": "Mark_task_as_completed",
    "group": "API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Id of task.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "object",
            "description": "<p>Task objects.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"id\": 3,\n  \"calendar_id\": 2,\n  \"name\": \"Zrobić zadanie\",\n  \"completed\": 1,\n  \"created_at\": \"2016-11-01\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Input/API/completeTask.js",
    "groupTitle": "API"
  }
] });
