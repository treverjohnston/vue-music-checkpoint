let session = require('express-session');
let MongoDBStore = require('connect-mongodb-session')(session);

console.log(process.env.CONNECTIONSTRING)

let store = new MongoDBStore(
	{
		uri: 'mongodb://mmhmm:mmhmm@ds151963.mlab.com:51963/music',
		collection: 'Sessions'
	});

// Catch errors 
store.on('error', function (error) {
	console.error('Session error: ', error);
});

module.exports = session({
	secret: 'It\'s dangerous to go alone',
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week 
	},
	store: store,
	resave: true,
	saveUninitialized: true
})