<p align="center">
<a href="http://cesiumjs.org/">
<img src="https://github.com/AnalyticalGraphicsInc/cesium/wiki/logos/Cesium_Logo_Color.jpg" width="50%" />
</a>
</p>

Web-Scenario-control-VR
This Is VRcontrol project by Saar Eliad and Inbar Kaslasi :) 

**Cesium version**: [1.39](http://cesiumjs.org/downloads.html).

Local server
------------

A local HTTP server is required to run the app.

Have python installed?  If so, from the `cesium-starter-app` root directory run
```
python -m SimpleHTTPServer
```
(Starting with Python 3, use `python -m http.server 8000`).

Browse to `http://localhost:8000/`

No python?  Use Cesium's node.js server.

* Install [node.js](http://nodejs.org/)
* From the `cesium-starter-app` root directory, run
   * `npm install`
   * `node server.js`

Browse to `http://localhost:8000/`

What's here?
------------

* [index.html](index.html) - Our main HTML page. HTML code goes here.
* [Source](Source/) - Contains [App.js](Source/App.js) which is referenced from index.html.  This is where our app's code goes.
* [ThirdParty](ThirdParty/) - A directory for third-party libraries, which initially includes just Cesium.  See the **Updating Cesium** section for how to use the latest version from the Cesium repo.
* [server.js](server.js) - A simple node.js server for serving our Cesium app.  See the **Local server** section.
* [package.json](package.json) - Dependencies for the node.js server.
* [.project](.project) - An [Eclipse](http://www.eclipse.org/downloads/) project with [JSHint](http://www.jshint.com/) enabled.
* [.settings](.settings/) - Directory with settings for the Eclipse project.
* [.gitignore](.gitignore) - A small list of files not to include in the git repo.  Add to this as needed.

Importing into Eclipse
----------------------

If you use Eclipse as your JavaScript IDE, it is easy to import the `cesium-starter-app` Eclipse project into a new workspace.  In Eclipse:
* `File -> Switch Workspace -> Other`
* Select a directory for the workspace and click `OK`
* In `Package Explorer`, right click and select `Import`
* Under `General`, select `Existing Projects into Workspace` and click `Next`
* Next to `Select root directory`, click `Browse`
* Browse to the `cesium-starter-app` root directory and click `Open`
* Click `Finish`

Hosting your app on GitHub Pages
--------------------------------

If your app only requires static file serving (i.e. no proxying etc) it can be hosted using [GitHub Pages](https://pages.github.com/).
* Push your app to a gh-pages branch on github.  If you want to push from master you can use this command:
  `git push origin master:gh-pages`
* After about 10 mins or so you can view your app with a URL like [http:/**my-github-username**.github.io/**my-awesome-cesium-starter-app**/](http://my-github-username.github.io/my-awesome-cesium-starter-app/)

Hosting your app on Heroku
--------------------------

It is simple to get an app up and running on a public server hosted by [Heroku](http://heroku.com/).  This will use the node server in this repo.  Depending on your app requirements this can often be done at no cost.

* Make sure you have the [heroku toolbelt](https://toolbelt.heroku.com/) installed
* `heroku create my-awesome-cesium-starter-app`
* `git push heroku master`
* If that succeeds you should be able to view your app with a URL like [https://**my-awesome-cesium-starter-app**.herokuapp.com](https://my-awesome-cesium-starter-app.herokuapp.com)

Updating Cesium
---------------

The built Cesium source is in [ThirdParty/Cesium/](ThirdParty/Cesium/).  
We may want to sync this up with the master branch in the [Cesium repo](https://github.com/AnalyticalGraphicsInc/cesium) once in a while. 

Then update the version at the top of this README.md.

Test the starter app in case any changes are needed to [index.html](index.html) or [App.js](Source/App.js).

This uses the unminified version of Cesium.js, which is great for debugging but is quite large for production deployments.  To use the minified version, see Cesium's guide.
```
The [Cesium Contributor's Guide](https://github.com/AnalyticalGraphicsInc/cesium/wiki/Contributor's-Guide) has more info on Cesium build options.

Cesium resources
----------------
* [Forum](https://cesiumjs.org/forum/)
* [Tutorials](https://cesiumjs.org/tutorials/)
* [Sandcastle](https://cesiumjs.org/Cesium/Apps/Sandcastle/) - lots of examples to copy and paste.
* [Reference Documentation](https://cesiumjs.org/Cesium/Build/Documentation/index.html)
