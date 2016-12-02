# SlackDevBot-BCGov
Scripts and Hubot instance required to run a bot that interfaces with GitHub through Slack commands

### Notes
* The scripts here are extremely beta, and while they do work to an extent, development is ongoing
* Any help from interested parties is welcome

### Requirements
Several components are required to set up and run these scripts
* Hubot. Located with setup instructions at https://hubot.github.com/
* NPM
* Octonode
* GitHubot
* Node.js

Interpreters for CoffeeScript and Javascript are also required

You will also need a GitHub OAuth Token

### Setup
1. Download and install the components listed in requirements
2. To run locally launch through command prompt with 'hubot --adapter slack'
2a. You will need an API token for your Slack group
2b. Good instructions on using the Slack adapter can be found at https://www.sitepoint.com/spice-up-your-slack-channel-with-hubot/
3. You can now talk to the bot on your Slack group

### TODOs
[ ] Get the bot running on Heroku in order to assure uptime. Instructions can be found here https://github.com/github/hubot/blob/master/docs/deploying/heroku.md.
[ ] Give the Scrarecrow a brain in order to facilitate memory persistence. This can be done using Redis, offered through Heroku. Details are here https://github.com/hubot-scripts/hubot-redis-brain.
[ ] Handle token storage more elegantly.
[ ] Set up permissions so that not all Slack users can access the bot's commands.
