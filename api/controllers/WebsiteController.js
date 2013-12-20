/**
 * WebsiteController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

 var GoogleSpreadsheets = require('google-spreadsheets');
 var util = require('util');
 var rowCount = 0;

 module.exports = {

  index: function(req, res) {

    GoogleSpreadsheets({
      key: "0AiM_8K3iyBKjdGRrOGs1SjE3VzB0ZUExbkt0VXRnMkE"
    }, function(err, spreadsheet) {
      rowCount = spreadsheet.worksheets[0].rowCount;
      spreadsheet.worksheets[0].cells({
        range: "R1C2:R" + rowCount + "C2"
      }, function(err, cells) {
        websites = new Array();
        for (var i = 1; i <= rowCount; ++i) {
          websites.push(cells.cells[i + '']['2'].value);
          return res.json(websites);
        });
    });

  }

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to WebsiteController)
   */
  // _config: {}


};
