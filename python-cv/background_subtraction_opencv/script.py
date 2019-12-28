import cv2
import numpy as np
import time

backSub = cv2.createBackgroundSubtractorMOG2()
cap = cv2.VideoCapture(0)
ret, frame = cap.read()
mask = backSub.apply(frame)
time.sleep(10)
ret, frame = cap.read()
mask = backSub.apply(frame)

cv2.imshow("mask",mask)
cv2.waitKey(0)

cap.release()
