import cv2
import numpy as np

cap = cv2.VideoCapture(0)

while True:
    _, frame = cap.read()

    edges = cv2.Canny(frame, 120, 120)

    #laplasian = cv2.Laplacian(frame, cv2.CV_64F)
    #sobelx = cv2.Sobel(frame, cv2.CV_64F, 1, 0, ksize=5)

    cv2.imshow('original', frame)
    cv2.imshow('edges', edges)
    #cv2.imshow('lapasian', laplasian)
    #cv2.imshow('sobel', sobelx)

    k = cv2.waitKey(5) & 0xFF
    if k == 27:
        break

cv2.destroyAllWindows()
cap.release()

