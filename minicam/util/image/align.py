# imports
import cv2

def align_images(ImageArray):
    # Align input images
    alignMTB = cv2.createAlignMTB()
    alignMTB.process(ImageArray, ImageArray)
