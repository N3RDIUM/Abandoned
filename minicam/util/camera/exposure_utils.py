# Imports
import cv2
import numpy as np

def get_average_image(ImageArray):
    image = np.zeros(ImageArray[0].shape, np.float32)
    for img in ImageArray:
        img = np.float32(img)
        image[:] = image[:] + img[:]
    image[:] = image[:] / len(ImageArray)
    image = np.uint8(image)
    image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
    return cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
