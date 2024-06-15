#include "newlib/testsuite/include/stdio.h"
#include "newlib/testsuite/include/stdlib.h"

#define CHECK(a) { \
  if (!(a)) \
    { \
      printf ("Failed " #a " in <%s> at line %d\n", __FILE__, __LINE__); \
      fflush(stdout); \
      abort(); \
    } \
}
