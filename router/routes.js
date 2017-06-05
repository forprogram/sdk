const router = require('koa-router')();
const Index = require('../controllers/index.js');

module.exports = function (app){

	router.post('/getsignature',Index.getsignature);

	app.use(router.routes());
	app.use(router.allowedMethods());
}






