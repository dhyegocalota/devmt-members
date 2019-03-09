# DevMT Members :notebook_with_decorative_cover:
Simple React + Redux demo to be used on my presentation about it.

## Deploy
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Up & Running
- Clone this repo
- Install dependencies with `yarn install`
- Create .env file with `cp .env.sample .env` and configure the settings there (see the [section below](#API))
- Start the app with `yarn start`

## API
Since Slack Web API doesn't seem to support CORS, I actually had to create a tiny [back-end wrapper server](https://github.com/dhyegocalota/devmt-members-api) to support it.

So you got two options:

- Use the online [deployed version](http://devmt-members-api.herokuapp.com/)
- OR deploy the API by yourself

## Author
Dhyego Calota <dhyegofernando@gmail.com>

## License
MIT
