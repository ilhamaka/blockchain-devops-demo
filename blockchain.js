// Simulation d'un smart contract de compteur
export class Counter {
  constructor() {
    this.count = 0;
  }

  // Fonction pour incrémenter le compteur
  increment() {
    this.count += 1;
    return this.count;
  }

  // Fonction pour lire la valeur actuelle
  getCount() {
    return this.count;
  }
}

// Simulation d'un contrat de portefeuille
export class Wallet {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Le montant doit être positif");
    }
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error("Fonds insuffisants");
    }
    this.balance -= amount;
    return this.balance;
  }
}