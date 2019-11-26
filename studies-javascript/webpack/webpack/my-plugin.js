const fs = require('fs');
const exec = require('child_process').exec;

class MyPlugin{
	constructor(options){
		this.options = options;
	}

	apply(compiler){
		console.log('HELLO');
		compiler.plugin('compile', () => {
			exec(`rm -r ${this.options.path}`, function(err, stdout, stderr){
				console.log('Finish');
			})
		})
	}
}


module.exports = MyPlugin;