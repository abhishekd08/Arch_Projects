import cv2
import numpy as np
import matplotlib.pyplot as plt

img = cv2.imread('person.jpg')
#img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
mask = np.zeros(img.shape[:2], np.uint8)

bgModel = np.zeros((1,65), np.float64)
fgModel = np.zeros((1,65), np.float64)

rect = (161, 79, 150, 150)

cv2.grabCut(img, mask, rect, bgModel, fgModel, 5, cv2.GC_INIT_WITH_RECT)
mask2 = np.where((mask==2) | (mask==0), 0, 1).astype('uint8')

img = img*mask[:,:,np.newaxis]

cv2.imshow('bg',bgModel)
cv2.imshow('fg',fgModel)
cv2.imshow('mask',mask)
cv2.imshow('mask2',mask2)
plt.imshow(img)
plt.colorbar()
plt.show()


