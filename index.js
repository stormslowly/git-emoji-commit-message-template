'use strict'

var request  = require('superagent')
var co = require('co')

co(function*(){
    var res = yield request.get('https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json')
    var gitEmojis = JSON.parse(res.text).gitmojis

    gitEmojis.forEach(function(gm){
        console.log('#'+gm.emoji +' \n#'+gm.description.toLowerCase())
    })

})
.catch(function(error){
    console.log(error,error.stack)
    process.exit(-1)
})
.then(function(){
    process.exit(0)
})

