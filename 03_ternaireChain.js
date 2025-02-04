/**
 * Utiliser les ternaires en les chainants, pour éviter les if elseif else
 *
 * Renvoyer ">" si a supérieur à b
 * Renvoyer "<" si a inférieur à b
 * Renvoyer "=" si a égal à b
 *
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */

function ternaryChain(a, b) {
  return a > b ? ">" : 
         a < b ? "<" : "=";
}

// console.log(ternaryChain(8, 14));
// console.log(ternaryChain(7, 4));
// console.log(ternaryChain(33, 99));
// console.log(ternaryChain(9, 9));

module.exports = ternaryChain;
