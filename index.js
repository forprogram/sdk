const app = require('koa')();
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());

app.use(cors({
	credentials:true,
}));

app.keys = ['forProgram'];
require('./router/routes.js')(app);
app.listen(2222);