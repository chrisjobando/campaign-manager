migrate((db) => {
  const collection = new Collection({
    "id": "6cr07l0kimr6vui",
    "created": "2023-02-17 16:26:04.965Z",
    "updated": "2023-02-17 16:26:04.965Z",
    "name": "items",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lgqhbuqr",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hpjsp2oc",
        "name": "quantity",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 9999
        }
      },
      {
        "system": false,
        "id": "jnpq6knx",
        "name": "category",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ayvdgtpt",
        "name": "price",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 9999
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6cr07l0kimr6vui");

  return dao.deleteCollection(collection);
})
