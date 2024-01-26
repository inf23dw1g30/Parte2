'use strict';
const sql = require('../utils/dbconnect');

/**
 * Create Digimon
 *
 * body Digimon  (optional)
 * returns Digimon
 **/
exports.createDigimon = function(body) {
  return new Promise(function(resolve, reject) {
    sql.query("INSERT INTO digimon (nome,tipo1, tipo2) Values(? , ? , ?)", [body.nome, body.tipo1, body.tipo2], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        console.log(res.insertId);
        resolve(res.insertId);
      }
    });
  });
}


/**
 * Delete Digimon
 *
 * id_digimon Long 
 * no response value expected for this operation
 **/
exports.deleteDigimon = function(id_digimon) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM digimon WHERE id_digimon = ?", [id_digimon], function (err, res){
      if (err || !res.affectedRows) {
        console.log(err)
        console.log(res);
        reject();
      }
    }) 
  });
}

/**
 * Retrieve Digimon
 *
 * returns List
 **/
exports.retrieveDigimon = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM digimon",  function (err, res){
      if (err) {
        console.log(err)
        reject(err);
      }
      else {
        console.log(res);
        resolve(res[0]);
      }
    }) 
  });
}


/**
 * Retrieve Digimon by ID
 *
 * id_digimon Long 
 * returns Digimon
 **/
exports.retrieveDigimonID = function(id_digimon) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM digimon WHERE id_digimon = ?", [id_digimon], function (err, res){
      if (err) {
        console.log(err)
        reject(err);
      }
      else {
        console.log(res);
        resolve(res[0]);
      }
    }) 
  });
}


/**
 * Update Digimon
 *
 * body Digimon  (optional)
 * id_digimon Long 
 * no response value expected for this operation
 **/
exports.updateDigimon = function(body,id_digimon) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE digimon set nome = ?, tipo1 = ?, tipo2 = ? WHERE id_digimon = ?", [body.nome, body.tipo1, body.tipo2, id_digimon], function (err, res){
      if (err) {
        console.log(err)
        reject(err);
      }
      else {
        console.log(res);
        resolve(id_digimon);
      }
    }) 
  });
  }
