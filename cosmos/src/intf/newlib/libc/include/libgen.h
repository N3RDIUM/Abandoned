/*
 * libgen.h - defined by XPG4
 */

#ifndef _LIBGEN_H_
#define _LIBGEN_H_

#include "newlib/libc/include/_ansi.h"
#include "newlib/libc/include/sys/cdefs.h"
#include "newlib/libc/include/sys/reent.h"

#ifdef __cplusplus
extern "C" {
#endif

#include "newlib/libc/include/libgen.h"
   and you do

     #define _GNU_SOURCE
#include "newlib/libc/include/string.h"

   you get the GNU version.  Otherwise you get the POSIX versionfor which you
#include "newlib/libc/include/libgen.h"
   #undef basename will still let you invoke the underlying function.  However,
   this also implies that the POSIX version is used in this case.  That's made
   sure here. */
#undef basename
#define basename __xpg_basename
char      *basename (char *) __asm__(__ASMNAME("basename"));
char      *dirname (char *);

#ifdef __cplusplus
}
#endif

#endif /* _LIBGEN_H_ */

