// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1715054528790247', // your App ID
        'clientSecret'  : 'ba3abc93f10006afd294779a075392d0', // your App Secret
        'callbackURL'   : 'https://ukifunwork4bymino.herokuapp.com/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'ccA0IpQbW0JlitR4bS2IXSWbW',
        'consumerSecret'    : '3nfhfZv8bt4XyRvje2EbDiPaIhrCfqQS0GOsWNk1ryoxnWRP9S',
        'callbackURL'       : 'https://ukifunwork4bymino.herokuapp.com/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '108117548611-sj31mii7aat2ohg7d3n5nq7jmivnu90u.apps.googleusercontent.com',
        'clientSecret'  : 'UWSJyBKCNEXNiBoj3hoKWuRX',
        'callbackURL'   : 'https://ukifunwork4bymino.herokuapp.com:8080/auth/google/callback'
    }

};
