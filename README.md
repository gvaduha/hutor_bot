Test of telegbot

gets data from /gvaduha/hutor_bot/blist.txt

Deploy with now to now.sh and say it to telegram:
curl --socks5-hostname localhost:9050 -F "url=https://hutorbot-fnubemqkus.now.sh/new-message" https://api.telegram.org/bot591327794:AAFLiAebRs3ZLCJeKYCwikvqWmH0GKOxVI4/setWebhook

Use test message
POST http://localhost:3000/new-message
Content-Type: application/json
{
	"message": {
		"text": "/command",
		"chat": {
			"id": 100009999
		}
	}
}
