const express = require('express');
const router  = express.Router();

router.all('*', (req, res, next) => {
	req.app.locals.layout = 'admin';
	next();
});

//http://localhost:4500/admin/posts
router.get('/', (req, res) => {
  res.send('IT WORKS!');
});


module.exports = router;