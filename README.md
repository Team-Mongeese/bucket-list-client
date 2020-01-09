# Bucket List Client

[![github issues](https://img.shields.io/github/issues/team-mongeese/bucket-list-client)]()
[![github issues](https://img.shields.io/github/commit-status/team-mongeese/bucket-list-client/master/377ce95cae42e4af4d52bbc1a93e0c2067720335)]()
[![github issues](https://img.shields.io/github/issues-pr/team-mongeese/bucket-list-client)]()


Bucket list trackers is a cloud-based web app designed to track the status of your bucket list.
  - Each item has a `title`, `descprition`, `location`, and `status`
  - Items are saved to a database connected with your email account
  - View a map with locations you would like to travel to

## Tech

Bucket list api uses open source projects to work:

* [Handlebars] - HTML templeting using JavaScript
* [Atom] - Amazing code editor
* [Sass] - Easy to write and compiles into css
* [Bootstrap] - UI templates and premade css variables
* [Grunt] - Strait forward build system
* [WebPack] - HTML, JavaScript, CSS & more compiler
* [jQuery] - Interact with DOM
* [EsLint] - Code is clean and standardized
* [Dillinger] - Helps with readme creation

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
* As a signed in user, I would like to update my bucket list item's title and description.
* As a signed in user, I would like to delete my bucket list item.
* As a signed in user, I would like to see all my bucket list items but not other users'.
* As a signed in user, I would like to cross off items to complete them.
### Wireframes
![main screen](https://i.imgur.com/Id1EIW5.jpg)
**More screens:**
[login](https://i.imgur.com/OG1GGq8.jpg)
[create goal](https://i.imgur.com/vt2L854.jpg)
[view goals](https://i.imgur.com/zT2mRt4.jpg)
[edit goals](https://i.imgur.com/E36e9hb.jpg)
[change password](https://i.imgur.com/c29EXiJ.jpg)
### sprint 1:
To start off this project Janinae spent some time researching the requirements and guide lines the day before. She created an project board with issues for all of our requirements. First day of the project Justin created a stategy to minimize merge conflicts by pair programing back end and front end. Janinae and Justin started out working on front end to test authorization and make sure it was working properly. During this time Bibek and Ben worked on back end. 
### sprint 2:
During this sprint Janinae and Justin pair programed to now test the recourse which was created. Bibek worked on styling up what we already had on the front end. He added the messages for invalid forms and a moving css background. During this time Ben was working on back end Readme.
### sprint 3:
At this point Bibek, Front end lead, took over the rest of front end. He took the web app from looking barebones to adding moving css background and adding the correct bootstrap styleing. Ben worked on the Front end Readme. During this time Janinae and Justin worked on adding a recource to the back end.
### sprint 4:
At this point most of the MVP requirements have been met. Two still remaind, Deleting and Updating our recourece. Bibek and Janinae went to pair programing this part of the project. By the end of this sprint all of the CRUD actions were now working. While the front end was being completed Justin and Ben started thinking about some of the reach goals. They decided on adding locations to the bucket.

## Unsolved Problems

 - Test
 - Add maps

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