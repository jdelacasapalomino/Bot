# Aura
The all-in-one, highly customizable Discord bot.

![Dashboard Preview](Coming Soon)

# Setup
Please follow the [Aura Setup](https://github.com/AuraDiscord/Aura) to use the bot.

`config.json`
```json
{
    "bot": {
        "token": "",
        "secret": "",
        "id": "545049149033152547",
        "ownerId": "173557815326015488",
        "activity": "auramm.xyz",
        "voteURLs": [
            "https://dbots.co/bots/545049149033152547/vote",
            "https://top.gg/bot/545049149033152547/vote",
            "https://discordbotlist.com/bots/545049149033152547/upvote"
        ],
        "botLists": {
            "dbl": {
                "token": "",
                "webhookSecret": ""
            },
            "topGG": {
                "token": "",
                "webhookSecret": ""
            }
        }
    },
    "guild": {
        "id": "625103903796756500",
        "premiumRoleId": "762435391486689321"
    },
    "api": {
        "port": "3000",
        "url": "http://localhost:3000/api",
        "stripeSecretKey": "",
        "stripeWebhookSecret": ""
    },
    "dashboardURL": "http://localhost:4200",
    "mongoURL": "mongodb://localhost/Aura"
}```
