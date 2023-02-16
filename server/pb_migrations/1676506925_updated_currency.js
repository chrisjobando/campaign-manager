migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g4cocz89qu9f4zh")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g4cocz89qu9f4zh")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
