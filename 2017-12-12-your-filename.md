## A Rapper Application in ReactJS
## DEMO [HERE](https://rapperapplication.herokuapp.com/) or <https://rapperapplication.herokuapp.com/>

This was my first ReactJS project, and I had a lot of fun with it. I still have much to learn. Webpack has a very steep learning curve, but after that it's easy living. Below is the core structure of this application.

## CORE STRUCTURE
1. **Back end** - NodeJS with Express for the server
2. **Front end** - ReactJS
3. **Styles Framework** - Bootstrap 4
4. **ES6 Compiler** - Babel
5. **Other Important Modules** - Webpack

## A NOTE FOR USERS WISHING TO DEPLOY WEBPACK APPLICATIONS TO HEROKU:
**YOU MUST HAVE A SERVER SET UP WITH EXPRESS.**

Please include this as 'server.js' in the root directory of your project.

	const express = require('express');
    const path = require('path');
    const app = express();

    app.use(express.static(__dirname + '/dist/'));
    app.use('/src/assets', express.static(__dirname + '/src/assets/'));


    app.listen(process.env.PORT || 8080);


***Please look at the JSON file to properly configure the scripts.**


### React is awesome, and I can't wait to learn more. I hope you enjoy this project!
