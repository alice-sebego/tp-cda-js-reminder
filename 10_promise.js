
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });

// Utilisation
sleep(2000)
    .then(() => console.log("2 sec stp"))
    .catch(() => console.log("error"));

module.exports = {sleep};