var fs = require('fs');
var cp = require('child_process');
var resolve = require('path').resolve
async function initAll() {
	let modules = fs.readdirSync(resolve(__dirname, './'));
	console.log(modules);
	for (let module of modules) {
		let path = resolve(__dirname, `./${module}/src/index.js`);
		console.log(`Looking for ${path}`)
		if (!fs.existsSync(path)) continue;
		try {
			var child = cp.spawn('node', [path], {
				detached: true,
				stdio: 'ignore'
			});

			child.unref();
		} catch (exp) {
			console.log(exp)
		}

		console.log("Inited " + module);
	}
}

exports.initAll = initAll;
exports.eventemitter = undefined;