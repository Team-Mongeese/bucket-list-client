# Bucket List Client
[![github issues](https://img.shields.io/github/issues/team-mongeese/bucket-list-client)]()
[![github issues](https://img.shields.io/github/commit-status/team-mongeese/bucket-list-client/master/377ce95cae42e4af4d52bbc1a93e0c2067720335)]()
[![github issues](https://img.shields.io/github/issues-pr/team-mongeese/bucket-list-client)]()
## An explanation of the what the app does and how it works.
Bucket List is a cloud-based web app for adventurers of all stripes to be able to track items in their own, individual bucket list to help them achieve their life’s goals.
Using Mongoose, the user is able create an account with email and password, that only they can see. From there, they can create “Goals” on their bucket list and add it to their MongoDB database. These “Goals” can be updated with new “titles” or “descriptions” if the user provides id of the goal (available of the “bucket list” index). They are also able to update the status to Complete, yes, if they have crossed it off their list. If the user no longer has passion for one of their goals, they can also delete the goal completely. While accessing their account, they can change their passwords and then ultimately log out so they can go pursue their dreams!
## Links
  [**backend repo**](https://github.com/Team-Mongeese/bucket-list-api)

  [**deployed client**](https://team-mongeese.github.io/bucket-list-client/)
  
  [**deployed api**](https://powerful-meadow-13173.herokuapp.com/)
## Tech
Bucket list Frontend uses open source projects to work:
* [Handlebars] - HTML templeting using JavaScript
* [Atom] - Amazing code editor
* [Sass] - Easy to write and compiles into css
* [Bootstrap] - UI templates and premade css variables
* [Grunt] - Strait forward build system
* [WebPack] - HTML, JavaScript, CSS & more compiler
* [jQuery/AJAX] - Interact with DOM
* [EsLint] - Code is clean and standardized
* [Dillinger] - Helps with readme creation
## List unsolved problems which would be fixed in future iterations.
 - Each item has a `location`
 - Add/View a map with locations you would like to travel to
## Installation
Bucket List Tracker requires [Node.js](https://nodejs.org/) v4+ to run.
Install the dependencies...
### Deploy:
```sh
$ npm install
$ grunt deploy
```
### Development:
```sh
$ npm install
$ grunt server
```
**note:***`grunt serve` & `grunt s` work as well*
### (optional) Lint:
```sh
$ npm install
$ grunt nag
```
## Planning
### User stories:
* As an unregistered user, I would like to sign up with email and password.
* As a registered user, I would like to sign in with email and password.
* As a signed in user, I would like to change password.
* As a signed in user, I would like to sign out.
* As a signed in user, I would like to create a bucket list item with a title and description.
* As a signed in user, I would like to update my bucket list item’s title and description.
* As a signed in user, I would like to delete my bucket list item.
* As a signed in user, I would like to see all my bucket list items but not other users’.
* As a signed in user, I would like to cross off items to complete them.
### Wireframes
![main screen](https://i.imgur.com/Id1EIW5.jpg)
**More screens:**
[login](https://i.imgur.com/OG1GGq8.jpg)
[create goal](https://i.imgur.com/vt2L854.jpg)
[view goals](https://i.imgur.com/zT2mRt4.jpg)
[edit goals](https://i.imgur.com/E36e9hb.jpg)
[change password](https://i.imgur.com/c29EXiJ.jpg)
## Document your planning, process and problem-solving strategy
### SCRUM Schedule
Everyday consisted of three 15 minute stand-ups where we touched base about how far along we came in a Sprint (Sprints were approximately 3 hours long) at 9:05A, 11:45A, 3:30P. During the process, we ended up adding an unofficial meeting at the end of day 4:40P, as well.
### Sprint 1:
To start off this project, the whole team spent some time researching the requirements and guide lines the day before. We assigned group roles: Product Lead, Frontend Lead, Backend Lead, and Quality Control Lead.
Janina created a project board in Github with issues for all of our requirements to deploy final product. First day of the project, Justin created a stategy to minimize merge conflicts by pair programing back end and front end. Janina and Justin started out working on frontend to create and test authorization and make sure it was working properly. During this time, Bibek and Ben worked on back end.
### Sprint 2:
During this sprint Janina and Justin pair programmed to now test the recourse which was created. Bibek worked on styling up what we already had on the front end. He added the messages for invalid forms and a moving CSS background. During this time, Ben was working on Backend Readme.
### Sprint 3:
At this point Bibek, Front end lead, took over the rest of front end. He took the web app from looking barebones to adding moving CSS background and adding the correct bootstrap styling. Ben worked on the Front end Readme. During this time, Janina and Justin worked on adding a recource to the back end. While the front end was being completed, Justin and Ben started thinking about some of the reach goals. They decided on adding locations to the bucket list items.
### Sprint 4:
At this point most of the MVP requirements have been met. We, as a team, did some testing in development. Two requirements still remained, Deleting and Updating our resource messages. Bibek and Janina went to pair programing this part of the project. By the end of this sprint all of the CRUD actions were now working. Justin and Ben continued to work on location reach goal.
### Sprint 5
As a team, we looked into some more exact messages for Deleting and Updating and also looked into having a CSS styling for if bucket list goal was completed. Finally, we all tested our application in production for any bugs.
### Merge Conflict/Workflow
There ended up being one significant merge conflict on the frontend of our repo. Both pairs worked on the index.html at the same time. At our end-of-day meeting, on the first day, we concluded to push the most up-to-date information on each feature branch (named ‘interface’ and ‘resource’) and then first objective the next morning was to merge and rebase these two branches into development branch as a team.
The steps were the following:
 - `interface` branch was pushed and merged into `development` branch
 - `development` branch was pulled down to local machine hosting the `resource` branch
 - from there, `resource` branch was rebased with updated `development` branch, where conflicts were resolved manually
 - `resource` was pushed and then merged into `development` branch on Github
License
----
MIT
[Gulp]: <http://gulpjs.com>
[Handlebars]: <https://handlebarsjs.com/>
[Atom]: <https://atom.io/>
[Sass]: <https://sass-lang.com/>
[Bootstrap]: <https://getbootstrap.com/>
[Grunt]: <https://gruntjs.com/>
[WebPack]: <https://webpack.js.org/>
[jQuery]: <https://jquery.com/>
[EsLint]: <https://eslint.org/>
[Dillinger]: <https://dillinger.io/>
