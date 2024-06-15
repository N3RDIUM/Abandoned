<<<<<<< HEAD
import geocoder
from timezonefinder import TimezoneFinder
from pytz import timezone

def get_location():
    """
    Get the location of the user
    """
    g = geocoder.ip('me')
    return g.latlng

def get_timezone():
    """
    Get the timezone of the user
    """
    location = get_location()
    tf = TimezoneFinder()
    tz = tf.timezone_at(lng=location[1], lat=location[0])
    return timezone(tz)
=======
import geocoder
from timezonefinder import TimezoneFinder
from pytz import timezone

def get_location():
    """
    Get the location of the user
    """
    g = geocoder.ip('me')
    return g.latlng

def get_timezone():
    """
    Get the timezone of the user
    """
    location = get_location()
    tf = TimezoneFinder()
    tz = tf.timezone_at(lng=location[1], lat=location[0])
    return timezone(tz)
>>>>>>> 8e914ed4c6e90ab176ef086bc801202bf3863653
