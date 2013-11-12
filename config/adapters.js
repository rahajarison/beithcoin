/**
 * Global adapter config
 *
 * The `adapters` configuration object lets you create different global "saved settings"
 * that you can mix and match in your models.  The `default` option indicates which
 * "saved setting" should be used if a model doesn't have an adapter specified.
 *
 * Keep in mind that options you define directly in your model definitions
 * will override these settings.
 *
 * For more information on adapter configuration, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.adapters = {
  'default': 'mongo',

  // sails v.0.9.0
  mongo: {
    module: 'sails-mongo',

    host: 'ds045978.mongolab.com',
    port: 45978,
    user     : 'nodejitsu_rahajarison',
    password : 'nq58558o3afeisksa57ug912ft',
    database : 'nodejitsu_rahajarison_nodejitsudb9305871310'

    // host     : 'localhost',
    // port     : 27017,
    // user     : 'reader',
    // password : 'bitcoin',
    // database : 'bitcoin_dev'
  }
};
