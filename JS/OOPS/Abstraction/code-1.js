class ATM {
    authenticate() {
        console.log("PIN Verified ✅");
    }
    
    dispenseCash() {
        console.log("Cash Withdrawn 💵");
    }
    withdraw() {   // abstraction: user ko bas yeh call karna hai
      this.authenticate();
      this.dispenseCash();
    }

}

let atm = new ATM();
atm.withdraw();
