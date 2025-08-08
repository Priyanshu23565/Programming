account_name = ""
account_age = 0
account_mobile = ""
account_balance = 0
account_pin = 0
account_created = False

while True:
    print("\n==== BANK MANAGEMENT SYSTEM ====")
    print("1. Open New Account")
    print("2. Deposit Money")
    print("3. Withdraw Money")
    print("4. Show Account Details")
    print("5. Use ATM")
    print("6. Exit")
    
    choice = int(input("Enter your choice: "))
      
    if choice == 1:
        if account_created:
            print("⚠️ Account already exists!")
        else:
            print("\n--- ACCOUNT OPENING FORM ---")
            account_name = input("Enter your name: ")
            account_age = int(input("Enter your age: "))
            account_mobile = input("Enter your mobile number: ")
            account_balance = int(input("Enter initial deposit: ₹"))
            account_pin = int(input("Set a 4-digit ATM PIN: "))
            account_created = True
            print("✅ Account created successfully!")

    
    elif choice == 2:
        if not account_created:
            print("⚠️ Please open an account first.")
        else:
            amt = int(input("Enter amount to deposit: ₹"))
            account_balance += amt
            print(f"✅ ₹{amt} deposited successfully.")

    
    elif choice == 3:
        if not account_created:
            print("⚠️ Please open an account first.")
        else:
            amt = int(input("Enter amount to withdraw: ₹"))
            if amt <= account_balance:
                account_balance -= amt
                print(f"✅ ₹{amt} withdrawn successfully.")
            else:
                print("❌ Insufficient balance!")

    
    elif choice == 4:
        if not account_created:
            print("⚠️ Please open an account first.")
        else:
            print("\n--- ACCOUNT DETAILS ---")
            print("Name       :", account_name)
            print("Age        :", account_age)
            print("Mobile No. :", account_mobile)
            print("Balance    : ₹", account_balance)

    
    elif choice == 5:
        if not account_created:
            print("⚠️ Please open an account first.")
        else:
            print("\n--- ATM MACHINE ---")
            pin = int(input("Enter your 4-digit PIN: "))
            if pin == account_pin:
                print("✅ Access granted.")
                print("1. Check Balance")
                print("2. Withdraw Money")
                atm_choice = int(input("Choose option: "))
                if atm_choice == 1:
                    print("Available Balance: ₹", account_balance)
                elif atm_choice == 2:
                    atm_amt = int(input("Enter amount to withdraw: ₹"))
                    if atm_amt <= account_balance:
                        account_balance -= atm_amt
                        print(f"✅ ₹{atm_amt} withdrawn.")
                    else:
                        print("❌ Insufficient balance.")
                else:
                    print("⚠️ Invalid ATM option.")
            else:
                print("❌ Incorrect PIN!")

    elif choice == 6:
        print("👋 Thank you for using Bank Management System!")
        break

    else:
        print("❌ Invalid choice. Please try again.")
