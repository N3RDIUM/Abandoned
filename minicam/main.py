# cv2 program to simulate average exposure using a camera
import cv2
import numpy as np
import time

from util.image import align_images
from util.camera import get_average_image
from classes import ImageArray

# Capture video from camera and store in memory as ImageArray 
cap = cv2.VideoCapture(0)
arr = ImageArray([])

while True:
    # Capture frame-by-frame
    ret, frame = cap.read()

    # Display the resulting frame
    cv2.imshow('frame', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

    # Append frame to ImageArray
    arr.append(frame)

# When everything done, release the capture
cap.release()

# Align images and get average image
align_images(arr.images)
average_image = get_average_image(arr.images)

# Display average image
while True:
    cv2.imshow('average', average_image)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
