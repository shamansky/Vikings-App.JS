const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient;

const createRouter = require('./helpers/create_router.js');

const publicPath = path.join(__dirname, '../client/public');

app.use(express.static(publicPath));
app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('kattegat_list_overall');
  const vikingsCollection = db.collection('vikings');
  const vikingRouter = createRouter(vikingsCollection);
  app.use('/api/vikings', vikingRouter);
  const godRouter = createRouter(db.collection('gods'));
  app.use('/api/gods', godRouter)
  const valhallaRouter = createRouter(db.collection('valhalla'));
  app.use('/api/valhalla', valhallaRouter)
  const storyRouter = createRouter(db.collection('stories'));
  app.use('/api/stories', storyRouter)

})
app.listen(3000, () => {
  console.log('listening on port 3000');
})
