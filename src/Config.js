// @flow

import runtimeEnv from '@mars/heroku-js-runtime-env';
const env = runtimeEnv();

export default class Config {
  static get(name: string): string {
    return env[`REACT_APP_${name}`];
  }
}
