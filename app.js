const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const pagesRoute = require('./routes/pages/pages-route.js');
const adminRoute = require('./routes/admin/admin-route.js');

app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', exphbs({ defaultLayout: 'pages' }));
app.set('view engine', 'handlebars');

// Routes
app.use('/', pagesRoute);
app.use('/admin', adminRoute);

app.listen(4500, () => {
  console.log(`listening on port ${4500}`);
});