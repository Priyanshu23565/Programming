#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int main() {
    int userChoice, computerChoice;

    // srand(time(0)); → randomness start ho gayi.
    // rand() % 3      → sirf 0, 1, ya 2 milega.


        //---------------------------------------------->
    ///
    //     time(0) gives the current time in seconds.
    // srand() sets the seed for rand() using that time.
    // This ensures that each time you run the program, you'll get different random numbers.
    // If you don’t use srand(), rand() will give same numbers every time you run the program.

    // Random number seed

    
    srand(time(0));
    computerChoice = rand() % 3;  // 0 - Rock, 1 - Paper, 2 - Scissors

    // User Input
    cout << "Rock Paper Scissors Game\n";
    cout << "--------------------------\n";
    cout << "Enter your choice:\n";
    cout << "0 = Rock\n";
    cout << "1 = Paper\n";
    cout << "2 = Scissors\n";
    cout << "Your choice: ";
    cin >> userChoice;

    
    if (userChoice < 0 || userChoice > 2) {
        cout << "Invalid choice!\n";
        return 1;
    }

    cout << "You chose: ";
    if (userChoice == 0) cout << "Rock\n";
    else if (userChoice == 1) cout << "Paper\n";
    else cout << "Scissors\n";

    cout << "Computer chose: ";
    if (computerChoice == 0) cout << "Rock\n";
    else if (computerChoice == 1) cout << "Paper\n";
    else cout << "Scissors\n";

    // Decide winner
    if (userChoice == computerChoice) {
        cout << "It's a draw!\n";
    } else if ((userChoice == 0 && computerChoice == 2) ||
               (userChoice == 1 && computerChoice == 0) ||
               (userChoice == 2 && computerChoice == 1)) {
        cout << "You win!\n";
    } else {
        cout << "Computer wins!\n";
    }

    return 0;
}
