/* category data */

enum category {
#include "newlib/libc/ctype/categories.cat"
};

extern enum category category(wint_t ucs);
