# Mosaic Voice
Mosaic is an open source project to create a suite of assistative tools for Voice Therapy Trianing for trans people.

Front end built with React / Redux, backend built with express, progressive web app compatible.

## Live Demo
[https://oddert-mosaic-voice.glitch.me/](https://oddert-mosaic-voice.glitch.me/)

## Installation
```
$ git clone https://github.com/Oddert/Mosaic-Voice.git
$ cd Mosaic\ Voice/client
$ npm i
$ npm run install-client
```

### For development
```
$ npm run dev
```
### For a production build
```
$ npm run build
$ npm start
```

## Scripts
| script | command                                        | action
|--------|------------------------------------------------|------------------------------------------------|
| start  | node app.js                                    | runs the server                                |
| server | nodemon app.js                                 | runs the server with auto restart              |
| client | cd client && npm start                         | starts the development server for the client   |
| dev    | concurrently "npm run server" "npm run client" | run both the client and server for development |
| install-client | cd client && npm install | installs the client development environment |
