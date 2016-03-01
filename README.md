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
	```
* cd into the directory where you cloned the code and run these commands

    ```
	npm install
    npm start
    ```
* Learn more about jade at [jade syntax docs](http://naltatis.github.io/jade-syntax-docs/)
* Start editing index.jade and layout.jade (located in /views)
* To push your changes to the server

    ```
    git push
    git push heroku master
    ```
