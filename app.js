var koa     = require('koa');
var singles = require('koa-dot-singles');
var app     = koa();

var profile = require('./profile');

app.use(singles.is(profile));
app.use(singles.json(profile));
app.use(singles.html(profile));

app.listen(3000);
