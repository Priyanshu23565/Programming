#include <iostream>
#include <string>
using namespace std;

int main() {

string s = "Hello";
cout << s.length() << endl;         // length nikalna (kitne letters hai)
cout << s.substr(1,3) << endl;     // substring lena (1 se 3 letters)
s.append(" World");               // aur text add karna
cout << s << endl;               // final string print

}