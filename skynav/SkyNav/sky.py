<<<<<<< HEAD
# imports
import os
import datetime as dt
from skyfield import almanac
from skyfield.api import N, W, wgs84, load

# internal imports
import location

# loading ephemeris
import ephermis
eph = ephermis.get_eph('de421.bsp')

def get_sky_schedule():
    zone = location.get_timezone()
    now = zone.localize(dt.datetime.now())
    midnight = now.replace(hour=0, minute=0, second=0, microsecond=0)
    next_midnight = midnight + dt.timedelta(days=1)

    ts = load.timescale()
    t0 = ts.from_datetime(midnight)
    t1 = ts.from_datetime(next_midnight)
    bluffton = wgs84.latlon(40.8939 * N, 83.8917 * W)
    f = almanac.dark_twilight_day(eph, bluffton)
    times, events = almanac.find_discrete(t0, t1, f)

    ret = []

    previous_e = f(t0).item()
    for t, e in zip(times, events):
        if e != previous_e:
            ret.append([
                t.utc_datetime().strftime('%H:%M:%S'),
                almanac.TWILIGHTS[e],
                almanac.TWILIGHTS[previous_e]
            ])
        previous_e = e
    
=======
# imports
import os
import datetime as dt
from skyfield import almanac
from skyfield.api import N, W, wgs84, load

# internal imports
import location

# loading ephemeris
import ephermis
eph = ephermis.get_eph('de421.bsp')

def get_sky_schedule():
    zone = location.get_timezone()
    now = zone.localize(dt.datetime.now())
    midnight = now.replace(hour=0, minute=0, second=0, microsecond=0)
    next_midnight = midnight + dt.timedelta(days=1)

    ts = load.timescale()
    t0 = ts.from_datetime(midnight)
    t1 = ts.from_datetime(next_midnight)
    bluffton = wgs84.latlon(40.8939 * N, 83.8917 * W)
    f = almanac.dark_twilight_day(eph, bluffton)
    times, events = almanac.find_discrete(t0, t1, f)

    ret = []

    previous_e = f(t0).item()
    for t, e in zip(times, events):
        if e != previous_e:
            ret.append([
                t.utc_datetime().strftime('%H:%M:%S'),
                almanac.TWILIGHTS[e],
                almanac.TWILIGHTS[previous_e]
            ])
        previous_e = e
    
>>>>>>> 8e914ed4c6e90ab176ef086bc801202bf3863653
    return ret