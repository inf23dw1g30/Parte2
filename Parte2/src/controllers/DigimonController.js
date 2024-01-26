'use strict';

var utils = require('../utils/writer.js');
var DigimonController = require('../service/DigimonControllerService');

module.exports.createDigimon = function createDigimon (req, res, next, body) {
  DigimonController.createDigimon(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteDigimon = function deleteDigimon (req, res, next, id_digimon) {
  DigimonController.deleteDigimon(id_digimon)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveDigimon = function retrieveDigimon (req, res, next) {
  DigimonController.retrieveDigimon()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveDigimonID = function retrieveDigimonID (req, res, next, id_digimon) {
  DigimonController.retrieveDigimonID(id_digimon)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateDigimon = function updateDigimon (req, res, next, body, id_digimon) {
  DigimonController.updateDigimon(body, id_digimon)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
