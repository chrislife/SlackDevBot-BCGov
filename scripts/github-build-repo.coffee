# Description:
#   Hubot scripts to scaffold github repos
#
# Dependencies:
#   "githubot": "0.4.x"
#
# Configuration:
#   HUBOT_GITHUB_TOKEN
#   HUBOT_GITHUB_API
#
# Commands:
#   hubot build repo <username> <repo name> - builds an empty repo with the supplied name
#   hubot add license <license> to <username> <repo name> - adds license to indicated repo
#
# Notes:
#
# Author:
#   chrislife
  
module.exports = (robot) ->	
  github = require("githubot")(robot)
  scaffold = require("./scaffold")
  robot.respond /build repo (.*) (.*)/, (msg) ->
    scaffold.build_repo(msg.match[1], msg.match[2])
   	msg.send "Built repo #{msg.match[2]} for #{msg.match[1]}"

  robot.respond /add license (.*) to (.*) (.*)/, (msg) ->
   	scaffold.add_license(msg.match[2], msg.match[3], msg.match[1])
   	msg.send "Added license #{msg.match[1]} to #{msg.match[2]} / #{msg.match[3]}"