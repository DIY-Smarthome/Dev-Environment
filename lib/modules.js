var fs = require('fs');
var resolve = require('path').resolve
async function initAll(eventhandler) {
	let modules = fs.readdirSync(resolve(__dirname, '../lib/'));
	console.log(modules);
	for (let module of modules) {
		let path = resolve(__dirname, `../lib/${module}/dist/index.js`);
		if (!fs.existsSync(path)) continue;
		console.log(`Looking for ${path}`)
		try{
			require(path).init(eventhandler);
		}catch(exp){
			console.log(exp)
		}
		
		console.log("Inited "+module);
	}
}

exports.initAll = initAll;
exports.eventemitter = undefined;