Getting the server up and running
=

* Download node from [nodejs.org](http://nodejs.org/download/)

    ```
    npm install -g n
    n v0.10.28
    ```

* You will need to download [heroku toolbet](https://toolbelt.heroku.com/windows) (This will also install git for you)
* clone this project by typing (you will also need git to be installed on your machine)

	```
	git clone https://github.com/aakn/rushil-node-blog.git
    heroku login
    heroku git:remote -a rushil
	```
* cd into the directory where you cloned the code and run these commands

    ```
	npm install
    npm start
    ```
* In the future if you've got to test your changes, make the changes, run `npm start` in cmd, and then hit `http://localhost:3000/`
* Once you've verified your changes, you can push the changes to the server
    1. first you'll need to commit the changes. http://git-scm.com/docs/gittutorial
    2. Push your changes

    ```
    git push
    git push heroku master
    ```

