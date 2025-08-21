#include <iostream>
using namespace std;

template <class T>
T add(T a, T b) {
    return a + b;
}

int main() {
    cout << add(5, 10) << endl;     // int
    cout << add(2.5, 3.5) << endl;  // double
    cout << add(string("Hi "), string("Bhai")) << endl; // string
}
