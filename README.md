
## SlackDevBot-BCGov
Scripts and Hubot instance required to run a bot that interfaces with GitHub through Slack commands

## Features

Current features allow for the bot to:
* Add empty repositories with CONTRIBUTING, README, .gitignore files
* Add a LICENSE file selected from a hardcoded selection of licenses

## Usage

1. Launch Hubot as described below in the 'Installation' section.
2. Log onto Slack and add it to any deisred channels.
3. Start sending commands.

## Requirements

Several components are required to set up and run these scripts
* Hubot. Located with setup instructions at https://hubot.github.com/
* NPM
* Octonode
* GitHubot
* Node.js
* Interpreters for CoffeeScript and Javascript

You will also need a GitHub OAuth Token and a Slack API token.

## Installation

1. Download and install the components listed in requirements
1a. It is recommended to install hubot through yeoman
2. To run locally launch through command prompt with `hubot --adapter slack` or alternatively run `bin\hubot -a slack` from the folder hubot is installed in
2a. You will need an API token for your Slack group
2b. Good instructions on using the Slack adapter can be found at https://www.sitepoint.com/spice-up-your-slack-channel-with-hubot/

## Project Status

The following items are current project TODOs:
- [ ] Get the bot running on Heroku in order to assure uptime. Instructions can be found here https://github.com/github/hubot/blob/master/docs/deploying/heroku.md.
- [ ] Give the Scrarecrow a brain in order to facilitate memory persistence. This can be done using Redis, offered through Heroku. Details are here https://github.com/hubot-scripts/hubot-redis-brain.
- [ ] Handle token storage more elegantly.
- [ ] Set up permissions so that not all Slack users can access the bot's commands.
- [ ] Increase bot stability and refine error handling

## Goals/Roadmap

The goal of the project is to complete the TODOs listed in the 'Project Status' section, and expand the number of commands the bot will respond to.

## Getting Help or Reporting an Issue

Questions can be addressed to user chrislife, and issues can be reported through GitHub.

## How to Contribute

Any contributions are welcome.
