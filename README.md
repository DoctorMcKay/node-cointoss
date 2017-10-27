# cointoss

Toss a cryptographically secure coin.

# What?

Exports a function that, when called, returns either `true` or `false` randomly and cryptographically securely.

# Why?

Because if there's one thing npm needs more if, it's 3-line packages.

# How?

```js
const cointoss = require('cointoss');
if (cointoss()) {
	console.log("Heads");
} else {
	console.log("Tails");
}
```
