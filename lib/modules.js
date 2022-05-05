var fs = require('fs');
var cp = require('child_process');
var resolve = require('path').resolve
var loadJSON = require('load-json-file');
async function initAll() {
	let modules = fs.readdirSync(resolve(__dirname, './'));
	console.log(modules);
	for (let module of modules) {
		let path = resolve(__dirname, `./${module}/`);
		console.log(`Looking for ${resolve(path, "./config.json")}`)
		if (!fs.existsSync(resolve(path, "./config.json"))) continue;
		let config = loadJSON(resolve(path, "./config.json"));
		let startPath = resolve(path, config["startfile"]);
		if (!fs.existsSync(startPath)) continue;

		try {
			var child = cp.spawn('node', [startPath], {
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