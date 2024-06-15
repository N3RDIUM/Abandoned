/* Definition of opaque POSIX-1.2008 type locale_t for userspace. */

#ifndef	_SYS__LOCALE_H
#define _SYS__LOCALE_H

#include "newlib/libc/include/sys/newlib.h"
#include "newlib/libc/include/sys/sys/config.h"

struct __locale_t;
typedef struct __locale_t *locale_t;

#endif	/* _SYS__LOCALE_H */
