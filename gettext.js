var fs = require('fs');

gettext = {
	setLang: function(lang) {
		this.lang = lang;
		return this;
	},

	loadFromFile: function (filePath) {
		this.data = JSON.parse(fs.readFileSync(filePath));
		return this;
	},

	build: function() {
		return (key) => {
			if (!this.lang) throw "Lang specification required";

			return this.data[key][this.lang];
		}
	},
}

module.exports = gettext;