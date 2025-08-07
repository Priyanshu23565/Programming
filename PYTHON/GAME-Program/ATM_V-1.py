# Simple ATM System in Python

USER_PIN = "1234"
balance = 1000.0

def authenticate():
    pin = input("Enter your 4-digit PIN: ")
    if pin == USER_PIN:
        print("Login successful.\n")
        return True
    else:
        print("Incorrect PIN. Access denied.\n")
        return False

# Function to display menu
def show_menu():
    print("===== ATM Menu =====")
    print("1. Check Balance")
    print("2. Deposit Money")
    print("3. Withdraw Money")
    print("4. Exit")

# Function to check balance
def check_balance():
    print(f"\nYour current balance is: ${balance:.2f}\n")

# Function to deposit money
def deposit():
    global balance
    amount = float(input("Enter amount to deposit: $"))
    if amount > 0:
        balance += amount
        print(f"${amount:.2f} deposited successfully.\n")
    else:
        print("Invalid deposit amount.\n")

# Function to withdraw money
def withdraw():
    global balance
    amount = float(input("Enter amount to withdraw: $"))
    if amount > 0:
        if amount <= balance:
            balance -= amount
            print(f"${amount:.2f} withdrawn successfully.\n")
        else:
            print("Insufficient balance.\n")
    else:
        print("Invalid withdrawal amount.\n")

# Main function
def atm():
    if not authenticate():
        return

    while True:
        show_menu()
        choice = input("Select an option (1-4): ")

        if choice == '1':
            check_balance()
        elif choice == '2':
            deposit()
        elif choice == '3':
            withdraw()
        elif choice == '4':
            print("Thank you for using the ATM. Goodbye!")
            break
        else:
            print("Invalid option. Please try again.\n")

# Run the ATM program
atm()
