module.exports = {
	"env": {
		"browser": false,
		"commonjs": true,
		"es6": true,
		"node": true,
		"jest": true
	},
	"extends": [
		"eslint:recommended"
	],
	"parserOptions": {
		"ecmaVersion": 2017,
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true
		},
		"sourceType": "module"
	},
	"plugins": [
		"filenames"
	],
	"rules": {
		"indent": [
			"error",
			"space",
			{ "SwitchCase": 1 }
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"always"
		],
		"filenames/match-regex": [2, "^[a-z_-]+", "(\\.test)?$",true],
	}
};