<<<<<<< HEAD
# imports
import skyfield.api
import os

# get ephermis data
eph = {}
files = os.scandir(os.path.join(os.path.dirname(__file__), 'ephermis'))
for file in files:
    if file.is_file():
        if file.name.endswith('.bsp'):
            eph[file.name] = skyfield.api.load_file(os.path.join(os.path.dirname(__file__), 'ephermis', file.name))

def get_eph(index):
    """
    Get the ephermis data
    """
    return eph[index]
=======
# imports
import skyfield.api
import os

# get ephermis data
eph = {}
files = os.scandir(os.path.join(os.path.dirname(__file__), 'ephermis'))
for file in files:
    if file.is_file():
        if file.name.endswith('.bsp'):
            eph[file.name] = skyfield.api.load_file(os.path.join(os.path.dirname(__file__), 'ephermis', file.name))

def get_eph(index):
    """
    Get the ephermis data
    """
    return eph[index]
>>>>>>> 8e914ed4c6e90ab176ef086bc801202bf3863653
