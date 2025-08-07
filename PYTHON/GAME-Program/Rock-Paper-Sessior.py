import random

print("Rock Paper Scissors Game")
print("--------------------------")
print("Enter your choice:")
print("0 = Rock")
print("1 = Paper")
print("2 = Scissors")

# Get user input
user = int(input("Your choice (0-2): "))

# Validate input
if user < 0 or user > 2:
    print("Invalid input! Please enter 0, 1, or 2.")
else:
    # Get computer's choice
    computer = random.randint(0, 2)

    # Show choices
    choices = ["Rock", "Paper", "Scissors"]
    print("You chose:", choices[user])
    print("Computer chose:", choices[computer])

    # Check result
    if user == computer:
        print("It's a draw!")
    elif (user == 0 and computer == 2) or \
        (user == 1 and computer == 0) or \
         (user == 2 and computer == 1):
        print("You win!")
    else:
        print("Computer wins!")
