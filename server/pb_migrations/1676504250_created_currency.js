migrate((db) => {
  const collection = new Collection({
    "id": "g4cocz89qu9f4zh",
    "created": "2023-02-15 23:37:30.599Z",
    "updated": "2023-02-15 23:37:30.599Z",
    "name": "currency",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1l7qiltb",
        "name": "platinum",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": null
        }
      },
      {
        "system": false,
        "id": "fey7sbyt",
        "name": "gold",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": null
        }
      },
      {
        "system": false,
        "id": "7qh41fjj",
        "name": "silver",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": null
        }
      },
      {
        "system": false,
        "id": "syzjtmvg",
        "name": "copper",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("g4cocz89qu9f4zh");

  return dao.deleteCollection(collection);
})
