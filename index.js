module.exports = function cointoss() {
	return (require('crypto').randomBytes(1)[0] & 1) == 1;
};
