
#ANGULAR

###Starting the project

1. Make a HTML document and insert Angular CDN, 'ng-app' to <html> tag and check that it works with a mathematical operation in the body (save it in the root):


~~~
    <!DOCTYPE html>
    <html lang="en" ng-app>
    <head>
        <meta charset="UTF-8">
        <title>Angular Web</title>
    </head>
    <body>
        {{ 3 + 3 }} <!-- must be 6 -->
        <script src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.6/angular.js'></script>
    </body>
    </html>
~~~

2. Think about the project and make folders to convert your project modular, then make different folders for:
- the differents pages of the web (modules)
- general JS
- SASS
- and a dist folder to compile with grunt the JSs and CSSs

3. Add the Gruntfile.js and package.json files in the root directory:
- The package.json must contains the url of your project in GitHub and also all the pluguins that you need for the Gruntfile.js. Then you must install all the dependences (pluguins) in the root directory with the cmd:
 ~~~
 npm install
 npm install grunt --save-dev
 ~~~
- Gruntfile.js is used to configure and define tasks.