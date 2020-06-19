'use strict';

module.exports = (config, env, webpack, options) => {
  const { target, dev } = env;

  if (target === 'web') {
    const RAZZLE = /^RAZZLE_/i;
    const machineEnv = Object.keys(process.env)
      .filter(key => RAZZLE.test(key))
      .reduce((env, key) => {
        env[key] = process.env[key];
        return env;
      },
      {
        NODE_ENV: process.env.NODE_ENV,
        PORT: process.env.PORT || config.devServer.port || 3000,
        VERBOSE: !!process.env.VERBOSE,
        HOST: process.env.HOST || config.devServer.host || 'localhost',
        BUILD_TARGET: "web",
      });

    const stringified = Object.keys(machineEnv).reduce((env, key) => {
      env[`process.env.${key}`] = JSON.stringify(machineEnv[key]);
      return env;
    }, {});


    config.plugins = [
      ...config.plugins,
      new webpack.DefinePlugin({
        process: { env: stringified }
      })
    ]
  }

  return config;
};
