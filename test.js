import { Counter, Wallet } from './blockchain.js';

console.log("🧪 LANCEMENT DES TESTS BLOCKCHAIN...");
console.log("=====================================");

// Test 1: Compteur simple
try {
  const counter = new Counter();
  console.log(" Test 1 - Valeur initiale:", counter.getCount());
  
  counter.increment();
  const newValue = counter.getCount();
  console.log(" Test 1 - Après incrément:", newValue);
  
  // VÉRIFICATION CRITIQUE (sera modifiée pendant l'atelier)
  if (newValue === 1) {
    console.log(" TEST COMPTEUR - RÉUSSI");
  } else {
    console.log(" TEST COMPTEUR - ÉCHEC");
    process.exit(1);
  }
} catch (error) {
  console.log(" TEST COMPTEUR - ERREUR:", error.message);
  process.exit(1);
}

// Test 2: Portefeuille
try {
  const wallet = new Wallet();
  wallet.deposit(100);
  wallet.withdraw(30);
  const balance = wallet.deposit(50); // Devrait être 120
  
  console.log("Test 2 - Solde final portefeuille:", balance);
  
  if (balance === 120) {
    console.log("TEST PORTEFEUILLE - RÉUSSI");
  } else {
    console.log(" TEST PORTEFEUILLE - ÉCHEC");
    process.exit(1);
  }
} catch (error) {
  console.log(" TEST PORTEFEUILLE - ERREUR:", error.message);
  process.exit(1);
}

console.log("=====================================");
console.log(" TOUS LES TESTS SONT PASSÉS !");
console.log(" Prêt pour le déploiement en production");