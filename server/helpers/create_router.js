const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function(collection){
  const router = express.Router();

  router.get('', (req, res) => {
    collection.find()
    .toArray()
    .then((docs) => res.json(docs))
  })

  router.get(':id', (req, res) => {
    collection.findOne(ObjectID(req.params.id))
    .then((docs) => res.json(docs));
  })

  router.delete(':id', (req, res) => {
    const id = ObjectID(req.params.id);
    collection.deleteOne({ _id: id})
    .then(() => collection.find().toArray())
    .then((docs) => res.json(docs));
  })

  router.post('', (req, res) => {
    const newVikings = req.body;
    collection.insertOne(newVikings)
    .then(() => collection.find().toArray())
    .then((docs) => res.json(docs));
  })

  router.put(':id', (req, res) => {
    collection.updateOne(
      { _id: ObjectID(req.params.id) },
      { $set: req.body }
    )
    .then(() => {
      collection.find().toArray()
    })
    .then((docs) => res.json(docs));
  })




  return router;
}


module.exports = createRouter;
