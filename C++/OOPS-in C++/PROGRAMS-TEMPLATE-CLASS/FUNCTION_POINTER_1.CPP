#include <iostream>
using namespace std;

void hello() {
cout << "Hello" << endl;
}

int main() {
void (*fp)() = hello; 

cout << "Function ka address: " << (void*)fp << endl;
fp(); 
return 0;
}