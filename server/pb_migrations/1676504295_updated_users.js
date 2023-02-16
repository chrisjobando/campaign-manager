migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hcrzzxnu",
    "name": "currencyId",
    "type": "relation",
    "required": false,
    "unique": true,
    "options": {
      "collectionId": "g4cocz89qu9f4zh",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("hcrzzxnu")

  return dao.saveCollection(collection)
})
