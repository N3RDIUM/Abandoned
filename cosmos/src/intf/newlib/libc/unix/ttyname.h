/* Common defines for ttyname.c and ttyname_r.c */
 
#include "newlib/libc/unix/dirent.h"
#include "newlib/libc/unix/paths.h"

#define TTYNAME_BUFSIZE	(sizeof (_PATH_DEV) + MAXNAMLEN)
