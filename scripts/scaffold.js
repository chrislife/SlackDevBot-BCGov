'use strict';

/*
 * Commits content to a supplied client.repo object
 * file_name, commit_note, and body are pretty self explanatory
 */
function commit_content(ghrepo, file_name, commit_note, body){
	ghrepo.createContents(file_name, commit_note, body, function(err, data, headers) {
		if (err) {
			console.error(err);
			console.error("error commiting to repo at: "+ghrepo.toString());
		}
	});
}

/*
 * GETS text from location through HTTPS GET request
 * commits resulting text to repo at ghrepo 
 */
function get_and_commit(path, ghrepo, file_name, commit_note){
	var request = require('request');
		return request(path.toString(), function (error, response, body) {
			if(error){    //Check for error
				return console.log('\n HTTPS GET request Error:', error);
			}
			if(response.statusCode !== 200){    //Check for right status code
				return console.log('\nInvalid Status Code Returned:', response.statusCode);
			}
			commit_content(ghrepo, file_name, commit_note, body);
	});
}

/*
 * Adds one of a preconfigured selection of license choices to the
 * repository at 'uname'/'repo_name'
 */
function add_license(uname, repo_name, license_type){
	var github = require('octonode');
	var client = github.client('GITHUB_OAUTH_TOKEN');
	var ghrepo = client.repo(uname + "/" + repo_name);
	var request = require('request');
	var commit_note = "Added a license"
	var file_name = "LICENSE.md"
	if(license_type == 'A2'){
		get_and_commit("http://www.apache.org/licenses/LICENSE-2.0.txt", ghrepo, file_name, commit_note);
	}
	else if(license_type == 'CCBY'){
		get_and_commit("https://creativecommons.org/licenses/by/4.0/legalcode.txt", ghrepo, file_name, commit_note);
	}
	else if(license_type == 'AGPL'){
		get_and_commit("https://www.gnu.org/licenses/agpl-3.0.txt", ghrepo, file_name, commit_note);
	}
}

/*
 * Builds a repo called 'repo_name' for 'uname', adding README, CONTRIBUTING, and .gitignore
 * Promise functionality is used to ensure that the repo is initialized before files are added
 */
function build_repo(uname, repo_name){
	var p1 = new Promise(
		function(resolve, reject) {
			var github = require('octonode');
			var client = github.client('GITHUB_OAUTH_TOKEN');
			var ghme = client.me();
			ghme.repo({
				"name": repo_name,
				"description": "This repo was scaffolded by devbot through Slack, please add a more detailed description",
			}, function(err, data, headers) {
				resolve(1);
				if (err) {
					console.error(err);
					console.error("error trying to deal with main repo");
				}
			})	
		}
	)

	p1.then(
		function(val) {
			var github = require('octonode');
			var client = github.client('GITHUB_OAUTH_TOKEN');
			get_and_commit("https://raw.githubusercontent.com/bcgov/BC-Policy-Framework-For-GitHub/master/BC-Gov-Org-HowTo/SAMPLE-README.md", client.repo(uname + "/" + repo_name), "README.md", "Added a README");
			get_and_commit("https://raw.githubusercontent.com/bcgov/BC-Policy-Framework-For-GitHub/master/BC-Gov-Org-HowTo/SAMPLE-CONTRIBUTING.md", client.repo(uname + "/" + repo_name), "CONTRIBUTING.md", "Added a CONTRIBUTING");
			commit_content(client.repo(uname + "/" + repo_name), ".gitignore", "Added a gitignore", "Itemize files that you would like intentionally left untracked. More details can be found at https://help.github.com/articles/ignoring-files/");
		})
	.catch(
		function(reason) {
			console.log('Handle rejected promise ('+reason+') here.');
		})
}

exports.build_repo = build_repo;
exports.add_license = add_license;