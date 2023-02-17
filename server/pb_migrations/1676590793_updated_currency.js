migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g4cocz89qu9f4zh")

  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g4cocz89qu9f4zh")

  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
