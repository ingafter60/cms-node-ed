// Load Modules
const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

// Load Routes
const indexPagesRoute = require('./routes/pages/index.js');
const indexAdminRoute = require('./routes/admin/index.js');
const postsAdminRoute = require('./routes/admin/posts.js');

// MongoDb Connection
mongoose.connect('mongodb://localhost:27017/cms_node_ed', {useMongoClient: true}).then(db => {
	console.log('Connected to MongoDb');
}).catch(error => console.log(error + " Error: Could not connect to MongoDb"));

// Static Files and View Engine
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', exphbs({ defaultLayout: 'pages' }));
app.set('view engine', 'handlebars');

// Use Routes Pages
app.use('/', indexPagesRoute);
// Use Routes Admin
app.use('/admin', indexAdminRoute);
app.use('/admin/posts', postsAdminRoute);

app.listen(4500, () => {
  console.log(`listening on port ${4500}`);
});
