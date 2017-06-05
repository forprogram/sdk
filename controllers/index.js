const signature = require('wx_jsapi_sign');
const config = require('../config.js')();
exports.getsignature=function *(){
  console.log(this.request);
	const url = this.request.body.url;
  // const url = 'http://www.isaac-wjl.com/yefun/';

  var result = yield new Promise(function(resolve, reject) {
    signature.getSignature(config)(url, function(error, result) {
      resolve(result);
    })
  });
  console.log(result);
  this.body = result;
};