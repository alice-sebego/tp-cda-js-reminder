
/**
 * retourne la valeur la plus grande des deux paramètres
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */
function ternaire(a , b) {
    return a > b ? a : b;
}

// console.log(ternaire(1, 2));
// console.log(ternaire(12, 8));
// console.log(ternaire(12, 12));

module.exports = ternaire;