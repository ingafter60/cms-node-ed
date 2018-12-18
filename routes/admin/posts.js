const express = require('express');
const router  = express.Router();

router.all('*', (req, res, next) => {
	req.app.locals.layout = 'admin';
	next();
});

//http://localhost:4500/admin/posts/create
router.get('/create', (req, res) => {
  res.render('admin/posts/create');
});

//http://localhost:4500/admin/posts/create
router.post('/create', (req, res) => {
  res.send('It works!');
});


module.exports = router;