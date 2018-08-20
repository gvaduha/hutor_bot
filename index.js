var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const axios = require('axios')

function postMsg(id, msg) {
	  axios
 		  .post(
   		  'https://api.telegram.org/bot591327794:AAFLiAebRs3ZLCJeKYCwikvqWmH0GKOxVI4/sendMessage',
     		{
       		chat_id: id,
        	text: msg
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

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.post('/new-message', function(req, res) {
  const { message } = req.body

  //Each message contains "text" and a "chat" object, which has an "id" which is the chat id

  if (message){ 

		msgtext="Donno such crap";

		if (message.text.toLowerCase() === '/beer') {

			// get list file
    	axios({
	  		url: 'https://raw.githubusercontent.com/gvaduha/hutor_bot/master/blist.txt',
			  method: 'GET',
			  responseType: 'text/plain',
			}).then((response) => {
			  msgtext = response.data
				console.log(msgtext)
				postMsg(message.chat.id, msgtext);
			});
		}
		else if (message.text.toLowerCase() === '/reserve') {
			return res.end()
		}
		else
			msgtext = "Can't get data from /gvaduha/hutor_bot/blist.txt";

		postMsg(message.chat.id, msgtext);
		
  }
  else return res.end()

})

// Start server
app.listen(3000, function() {
  console.log('Hutor@3000')
})