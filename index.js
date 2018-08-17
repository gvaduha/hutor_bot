var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const axios = require('axios')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.post('/new-message', function(req, res) {
  const { message } = req.body

  //Each message contains "text" and a "chat" object, which has an "id" which is the chat id

  if (message || message.text.toLowerCase() === 'beer') {
	  axios
  	  .post(
    	  'https://api.telegram.org/bot591327794:AAFLiAebRs3ZLCJeKYCwikvqWmH0GKOxVI4/sendMessage',
      	{
        	chat_id: message.chat.id,
	        text: 'xx: 21'
  	    }
    	)
	    .then(response => {
  	    console.log('Message posted')
    	  res.end('ok')
	    })
  	  .catch(err => {
    	  console.log('Error :', err)
      	res.end('Error :' + err)
	    })
  }

  return res.end()

})

// Start server
app.listen(3000, function() {
  console.log('Hutor@3000')
})