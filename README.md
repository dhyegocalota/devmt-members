# DevMT Members :notebook_with_decorative_cover:
Simple React App demo to be used on my presentation about it.

## Deploy
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Up & Running
- Clone this repo
- Install dependencies with `yarn install`
- Create .env file with `cp .env.sample .env` and configure the settings there (see the [section below](#API))
- Start the app with `yarn start`

## Branches & Versions
We got three different versions on this project that are separated by their branch:

- [master](https://github.com/dhyegocalota/devmt-members/tree/master): Hard coded data flow
- [manual](https://github.com/dhyegocalota/devmt-members/tree/manual): API data flow with manual work inside of the class components
- [redux](https://github.com/dhyegocalota/devmt-members/tree/redux): API data flow with Redux implementation and class components
- [hooks](https://github.com/dhyegocalota/devmt-members/tree/hooks): API data flow function components and hooks

## API
Since Slack Web API doesn't seem to support CORS, I actually had to create a tiny [back-end wrapper server](https://github.com/dhyegocalota/devmt-members-api) to support it.

So you got two options:

- Use the online [deployed version](http://devmt-members-api.herokuapp.com/)
- OR [deploy the API by yourself](https://github.com/dhyegocalota/devmt-members-api/tree/manual#deploy)

## Author
Dhyego Calota <dhyegofernando@gmail.com>

## License
MIT
