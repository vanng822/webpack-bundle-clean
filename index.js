
var fs = require('fs');
var path = require('path');

class BundleClean {
    constructor(options) {
        this.path = options.path || '.';
        this.filename = options.filename;
        if (!this.filename) {
            throw new Error('Require filename option');
        }
    }
    apply(compiler) {
        let stats = require(path.join(this.path, this.filename));
        compiler.plugin('compile', function(factory, callback) {
            if (stats.chunks) {
                Object.keys(stats.chunks).forEach(function(name) {
                    let chunk = stats.chunks[name];
                    if (chunk && chunk[0] && chunk[0].path) {
                        console.log('removing', chunk[0].path);
                        try {
                            fs.unlinkSync(chunk[0].path);
                        } catch(e) {
                            console.log(e);
                        }
                    }
                })
            }
        }.bind(this));
    }
}

module.export = BundleClean;
