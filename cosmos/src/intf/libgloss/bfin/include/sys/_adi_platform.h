/*
 * The authors hereby grant permission to use, copy, modify, distribute,
 * and license this software and its documentation for any purpose, provided
 * that existing copyright notices are retained in all copies and that this
 * notice is included verbatim in any distributions. No written agreement,
 * license, or royalty fee is required for any of the authorized uses.
 * Modifications to this software may be copyrighted by their authors
 * and need not follow the licensing terms described here, provided that
 * the new terms are clearly indicated on the first page of each file where
 * they apply.
 */

/*
** Include appropriate header file for platform.
** Copyright (C) 2004-2009 Analog Devices Inc. All Rights Reserved.
*/

#ifndef __ADI_PLATFORM_H
#define __ADI_PLATFORM_H

#ifndef __ASSEMBLER__

#if defined (__ADSPBF531__)
#include "libgloss/bfin/include/sys/cdefBF531.h"
#elif defined (__ADSPBF532__)
#include "libgloss/bfin/include/sys/cdefBF532.h"
#elif defined (__ADSPBF533__)
#include "libgloss/bfin/include/sys/cdefBF533.h"
#elif defined (__ADSPBF534__)
#include "libgloss/bfin/include/sys/cdefBF534.h"
#elif defined (__ADSPBF535__)
#include "libgloss/bfin/include/sys/cdefBF535.h"
#elif defined (__ADSPBF536__)
#include "libgloss/bfin/include/sys/cdefBF536.h"
#elif defined (__ADSPBF537__)
#include "libgloss/bfin/include/sys/cdefBF537.h"
#elif defined (__ADSPBF538__)
#include "libgloss/bfin/include/sys/cdefBF538.h"
#elif defined (__ADSPBF539__)
#include "libgloss/bfin/include/sys/cdefBF539.h"
#elif defined (__ADSPBF561__)
#include "libgloss/bfin/include/sys/cdefBF561.h"
#elif defined (__AD6531__)
#include "libgloss/bfin/include/sys/cdefAD6531.h"
#elif defined (__AD6532__)
#include "libgloss/bfin/include/sys/cdefAD6532.h"
#elif defined (__AD6723__)
#include "libgloss/bfin/include/sys/cdefAD6723.h"
#elif defined (__AD6900__)
#include "libgloss/bfin/include/sys/cdefAD6900.h"
#elif defined (__AD6901__)
#include "libgloss/bfin/include/sys/cdefAD6901.h"
#elif defined (__AD6902__)
#include "libgloss/bfin/include/sys/cdefAD6902.h"
#elif defined (__AD6903__)
#include "libgloss/bfin/include/sys/cdefAD6903.h"
#elif defined (__AD6904__)
#include "libgloss/bfin/include/sys/cdefAD6904.h"
#elif defined (__AD6905__)
#include "libgloss/bfin/include/sys/cdefAD6905.h"
#elif defined (__MT6906__)
#include "libgloss/bfin/include/sys/cdefMT6906.h"
#elif defined (__ADSPBF504__)
#include "libgloss/bfin/include/sys/cdefBF504.h"
#elif defined (__ADSPBF504F__)
#include "libgloss/bfin/include/sys/cdefBF504F.h"
#elif defined (__ADSPBF506__) || defined (__ADSPBF506F__)
#include "libgloss/bfin/include/sys/cdefBF506F.h"
#elif defined (__ADSPBF512__)
#include "libgloss/bfin/include/sys/cdefBF512.h"
#elif defined (__ADSPBF514__)
#include "libgloss/bfin/include/sys/cdefBF514.h"
#elif defined (__ADSPBF516__)
#include "libgloss/bfin/include/sys/cdefBF516.h"
#elif defined (__ADSPBF518__)
#include "libgloss/bfin/include/sys/cdefBF518.h"
#elif defined (__ADSPBF522__)
#include "libgloss/bfin/include/sys/cdefBF522.h"
#elif defined (__ADSPBF523__)
#include "libgloss/bfin/include/sys/cdefBF523.h"
#elif defined (__ADSPBF524__)
#include "libgloss/bfin/include/sys/cdefBF524.h"
#elif defined (__ADSPBF525__)
#include "libgloss/bfin/include/sys/cdefBF525.h"
#elif defined (__ADSPBF526__)
#include "libgloss/bfin/include/sys/cdefBF526.h"
#elif defined (__ADSPBF527__)
#include "libgloss/bfin/include/sys/cdefBF527.h"
#elif defined (__ADSPBF542__)
#include "libgloss/bfin/include/sys/cdefBF542.h"
#elif defined (__ADSPBF542M__)
#include "libgloss/bfin/include/sys/cdefBF542M.h"
#elif defined (__ADSPBF544__)
#include "libgloss/bfin/include/sys/cdefBF544.h"
#elif defined (__ADSPBF544M__)
#include "libgloss/bfin/include/sys/cdefBF544M.h"
#elif defined (__ADSPBF547__)
#include "libgloss/bfin/include/sys/cdefBF547.h"
#elif defined (__ADSPBF547M__)
#include "libgloss/bfin/include/sys/cdefBF547M.h"
#elif defined (__ADSPBF548__)
#include "libgloss/bfin/include/sys/cdefBF548.h"
#elif defined (__ADSPBF548M__)
#include "libgloss/bfin/include/sys/cdefBF548M.h"
#elif defined (__ADSPBF549__)
#include "libgloss/bfin/include/sys/cdefBF549.h"
#elif defined (__ADSPBF549M__)
#include "libgloss/bfin/include/sys/cdefBF549M.h"
#elif defined (__ADSPBF592A__)
#include "libgloss/bfin/include/sys/cdefBF592-A.h"
#elif defined (__ADSPBF606__)
#include "libgloss/bfin/include/sys/cdefBF606.h"
#elif defined (__ADSPBF607__)
#include "libgloss/bfin/include/sys/cdefBF607.h"
#elif defined (__ADSPBF608__)
#include "libgloss/bfin/include/sys/cdefBF608.h"
#elif defined (__ADSPBF609__)
#include "libgloss/bfin/include/sys/cdefBF609.h"
#else
#error Processor Type Not Supported
#endif


#else

#if defined (__ADSPBF531__)
#include "libgloss/bfin/include/sys/defBF531.h"
#elif defined (__ADSPBF532__)
#include "libgloss/bfin/include/sys/defBF532.h"
#elif defined (__ADSPBF533__)
#include "libgloss/bfin/include/sys/defBF533.h"
#elif defined (__ADSPBF534__)
#include "libgloss/bfin/include/sys/defBF534.h"
#elif defined (__ADSPBF535__)
#include "libgloss/bfin/include/sys/defBF535.h"
#elif defined (__ADSPBF536__)
#include "libgloss/bfin/include/sys/defBF536.h"
#elif defined (__ADSPBF537__)
#include "libgloss/bfin/include/sys/defBF537.h"
#elif defined (__ADSPBF538__)
#include "libgloss/bfin/include/sys/defBF538.h"
#elif defined (__ADSPBF539__)
#include "libgloss/bfin/include/sys/defBF539.h"
#elif defined (__ADSPBF561__)
#include "libgloss/bfin/include/sys/defBF561.h"
#elif defined (__AD6531__)
#include "libgloss/bfin/include/sys/defAD6531.h"
#elif defined (__AD6532__)
#include "libgloss/bfin/include/sys/defAD6532.h"
#elif defined (__AD6723__)
#include "libgloss/bfin/include/sys/defAD6723.h"
#elif defined (__AD6900__)
#include "libgloss/bfin/include/sys/defAD6900.h"
#elif defined (__AD6901__)
#include "libgloss/bfin/include/sys/defAD6901.h"
#elif defined (__AD6902__)
#include "libgloss/bfin/include/sys/defAD6902.h"
#elif defined (__AD6903__)
#include "libgloss/bfin/include/sys/defAD6903.h"
#elif defined (__AD6904__)
#include "libgloss/bfin/include/sys/defAD6904.h"
#elif defined (__AD6905__)
#include "libgloss/bfin/include/sys/defAD6905.h"
#elif defined (__MT6906__)
#include "libgloss/bfin/include/sys/defMT6906.h"
#elif defined (__ADSPBF504__)
#include "libgloss/bfin/include/sys/defBF504.h"
#elif defined (__ADSPBF504F__)
#include "libgloss/bfin/include/sys/defBF504F.h"
#elif defined (__ADSPBF506__) || defined (__ADSPBF506F__)
#include "libgloss/bfin/include/sys/defBF506F.h"
#elif defined (__ADSPBF512__)
#include "libgloss/bfin/include/sys/defBF512.h"
#elif defined (__ADSPBF514__)
#include "libgloss/bfin/include/sys/defBF514.h"
#elif defined (__ADSPBF516__)
#include "libgloss/bfin/include/sys/defBF516.h"
#elif defined (__ADSPBF518__)
#include "libgloss/bfin/include/sys/defBF518.h"
#elif defined (__ADSPBF522__)
#include "libgloss/bfin/include/sys/defBF522.h"
#elif defined (__ADSPBF523__)
#include "libgloss/bfin/include/sys/defBF523.h"
#elif defined (__ADSPBF524__)
#include "libgloss/bfin/include/sys/defBF524.h"
#elif defined (__ADSPBF525__)
#include "libgloss/bfin/include/sys/defBF525.h"
#elif defined (__ADSPBF526__)
#include "libgloss/bfin/include/sys/defBF526.h"
#elif defined (__ADSPBF527__)
#include "libgloss/bfin/include/sys/defBF527.h"
#elif defined (__ADSPBF542__)
#include "libgloss/bfin/include/sys/defBF542.h"
#elif defined (__ADSPBF542M__)
#include "libgloss/bfin/include/sys/defBF542M.h"
#elif defined (__ADSPBF544__)
#include "libgloss/bfin/include/sys/defBF544.h"
#elif defined (__ADSPBF544M__)
#include "libgloss/bfin/include/sys/defBF544M.h"
#elif defined (__ADSPBF547__)
#include "libgloss/bfin/include/sys/defBF547.h"
#elif defined (__ADSPBF547M__)
#include "libgloss/bfin/include/sys/defBF547M.h"
#elif defined (__ADSPBF548__)
#include "libgloss/bfin/include/sys/defBF548.h"
#elif defined (__ADSPBF548M__)
#include "libgloss/bfin/include/sys/defBF548M.h"
#elif defined (__ADSPBF549__)
#include "libgloss/bfin/include/sys/defBF549.h"
#elif defined (__ADSPBF549M__)
#include "libgloss/bfin/include/sys/defBF549M.h"
#elif defined (__ADSPBF592A__)
#include "libgloss/bfin/include/sys/defBF592-A.h"
#elif defined (__ADSPBF606__)
#include "libgloss/bfin/include/sys/defBF606.h"
#elif defined (__ADSPBF607__)
#include "libgloss/bfin/include/sys/defBF607.h"
#elif defined (__ADSPBF608__)
#include "libgloss/bfin/include/sys/defBF608.h"
#elif defined (__ADSPBF609__)
#include "libgloss/bfin/include/sys/defBF609.h"

#else
#error Processor Type Not Supported
#endif

#endif /* __ASSEMBLER__ */

#endif /* __INC_BLACKFIN__ */

