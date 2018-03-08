var error = require('./error');

exports.DBIND = function(normCode, field){
	if(window && window.__ktxh_formula && window.__ktxh_formula.dataContext){
		return window.__ktxh_formula.dataContext.getValue(normCode, field);
	}

	return error.error;
};