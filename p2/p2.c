#include <stdio.h>

int main() {
    long total = 2; // we don't know how large the number will be, so we stay safe with an unsigned long
    int f1 = 1;
    int f2 = 2;
    int f = f1 + f2;

    while (f < 4000000) {
        if (f % 2 == 0) {
            total += f;
        }
        f1 = f2;
        f2 = f;
        f = f1 + f2;
    }
    printf("%lu\n", total);
    return 0;
}
