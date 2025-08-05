#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int userChoice, compChoice;

    printf("🎮 Welcome to Stone-Paper-Scissors Game!\n");
    printf("👉 Enter your choice:\n");
    printf(" 1️⃣ Stone\n");
    printf(" 2️⃣ Paper\n");
    printf(" 3️⃣ Scissors\n");
    printf("Your Choice (1-3): ");
    scanf("%d", &userChoice);

    // Random computer choice
    srand(time(0));
    compChoice = (rand() % 3) + 1;

    // Show choices
    char *choices[] = {"Invalid", "Stone", "Paper", "Scissors"};
    printf("🧑 You chose: %s\n", choices[userChoice]);
    printf("💻 Computer chose: %s\n", choices[compChoice]);

    // Logic
    if (userChoice == compChoice) {
        printf("🤝 It's a Draw!\n");
    } else if (
        (userChoice == 1 && compChoice == 3) ||
        (userChoice == 2 && compChoice == 1) ||
        (userChoice == 3 && compChoice == 2)
    ) {
        printf("🎉 You Win!\n");
    } else {
        printf("😢 You Lose!\n");
    }

    return 0;
}
