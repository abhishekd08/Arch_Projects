import cv2
import numpy as np

img_bgr = cv2.imread('server_image.jpg')
img_gray = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2GRAY)

template = cv2.imread('server_image_template.jpg',0)
w, h = template.shape[::-1]

template2 = cv2.imread('server_image_template3.jpg',0)
w2, h2 = template2.shape[::-1]

res = cv2.matchTemplate(img_gray, template, cv2.TM_CCOEFF_NORMED)
threshold = 0.8
loc = np.where(res >= threshold)

res2 = cv2.matchTemplate(img_gray, template2, cv2.TM_CCOEFF_NORMED)
threshold2 = 0.8
loc2 = np.where(res2 >= threshold2)

for pt in zip(*loc[::-1]) :
    cv2.rectangle(img_bgr, pt, (pt[0]+w, pt[1]+h), (0,255,255), 2)
    
for pt2 in zip(*loc2[::-1]) :
    cv2.rectangle(img_bgr, pt2, (pt2[0]+w2, pt2[1]+h2), (255,0,255), 2)

cv2.imshow('detected', img_bgr)
cv2.waitKey(0)

