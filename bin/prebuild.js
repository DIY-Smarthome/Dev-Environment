var fs = require('fs')
var resolve = require('path').resolve
var join = require('path').join
var cp = require('child_process')
var os = require('os')
// get library path
var lib = resolve(__dirname, '../lib/')

fs.readdirSync(lib)
	.forEach(function (mod) {
		var modPath = join(lib, mod)

		// ensure path has tsconfig.json
		if (!fs.existsSync(join(modPath, 'tsconfig.json'))) return

		var npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm'
		// install folder
		cp.spawnSync(npmCmd, ['run', 'build'], {
			env: process.env,
			cwd: modPath,
			stdio: 'inherit'
		});
	})