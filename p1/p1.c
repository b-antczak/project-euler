#include <stdio.h>

int main() {
    // Simply start from 4 up to 1000, adding all numbers that are multiples of 3 or 5
    int total = 3;
    for (int i = 4; i < 1000; ++i) {
        if (i % 3 == 0 || i % 5 == 0) {
            total += i;
        }
    }
    printf("%d\n", total);
    return 0;
}
