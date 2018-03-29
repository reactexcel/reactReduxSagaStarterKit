# React Redux Saga Starter kit

```
This is a basic React Redux Saga Kit ready for start building app  
It contains HMR (hot module reload) with RedBox for error display  
Also there is immutability-update helper functions in redux/update.js  
for reducer update. src/Store/createStore has Integrated Redux Extension  
which can be used from chrome dev Tools to inspect Reducers.
```

## Setting up
git clone https://github.com/reactexcel/reactReduxSagaStarterKit.git  
cd reactReduxSagaStarterKit  
**npm install**  
**npm start**                      // start dev app at [localhost:3000](http://localhost:3000)  

## BUILDING APP
**npm run build**

```
.
├── build                    # All build-related configuration
│   └── webpack              # Environment-specific configuration files for webpack
├── dist                     # Builded App with all Files needed for running on browser.
├── public                   # favicon.ico humans.txt robots.txt files.
│   ├── humans.txt           # File that kept for description like developers list who contributed etc App etc
│   └── robots.txt           # Text file tells search engines what to index and what to leave.
├── server                   # Koa application (uses webpack middleware)
│   └── main.js              # Server application entry point
├── src                      # Application source code
│   ├── assets               # All Images to be kept here
│   ├── components           # All Dumb Components here
│   ├── config               # project general environment dependent config
│   │   ├── development      # development config
│   │   ├── index            # index converging config
│   │   └── production       # production config
│   ├── modules              # Reusable Container Components
│   │   └── home             # Dumb home View with link to login page
│   │   └── login            # Dumb Login working with Apis
│   ├── redux                # Reducers and action for each module inside this dir
│   │   ├── auth             # Container for module wise actions & reducer
│   │   │   ├── actions      # Module wise actions
│   │   │   └── reducers     # Module wise reducer
│   │   ├── actions.js       # Actions are defined here that are being imported to dispatch any api call & response
│   │   ├── constants.js     # Defines constants for the actions
│   │   ├── reducers.js      # Imports all reducers of diffrent modules and combine it
│   │   └── update.js        # Manual commands defined to update the reducers
│   ├── routes               # App routes
│   ├── services             # firing Api
│   ├── styles               # Application-wide styles (generally settings)
│   │   ├── main.scss        # Imports all scss form the diffrent module wise scss
│   │   └── auth             # Contains scss for the respective modules
│   ├── main.js              # Application bootstrap, routes and rendering
│   └── index.html           # Project's html file
├── project.config.js        # project build and development config
├── package.json             # Project's package.json file
│
:
```


## Index Page

Logo With link to Index Page  
React Redux Saga Starter kit link to Login page  

## Login Page

Logo With link to Index Page  
Login will fire an API and return Token which will be displayed next to Login Form  
  
  
![Index Page](https://raw.githubusercontent.com/reactexcel/reactReduxSagaStarterKit/master/src/assets/ReactReduxSagaStarterKit.png)


![Login Page](https://raw.githubusercontent.com/reactexcel/reactReduxSagaStarterKit/master/src/assets/ReactReduxSagaStarterKit1.png)
