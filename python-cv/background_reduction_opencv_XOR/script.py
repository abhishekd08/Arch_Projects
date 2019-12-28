import numpy as np
import cv2,time

cap = cv2.VideoCapture(0)

#img1=cv2.imread("bg_img.png")
_, img1 = cap.read()
cap.release()
blur1 = cv2.GaussianBlur(img1,(1,1),0)
gray1=cv2.cvtColor(blur1,cv2.COLOR_BGR2GRAY)
ret,thresh1 = cv2.threshold(gray1,65,255,cv2.THRESH_BINARY_INV)

print("going to sleep")
time.sleep(2)
print("woke up from sleep")

#img2=cv2.imread("fg_img.png")
cap = cv2.VideoCapture(0)
_, img2 = cap.read()
blur2 = cv2.GaussianBlur(img2,(1,1),0)
gray2=cv2.cvtColor(blur2,cv2.COLOR_BGR2GRAY)
ret,thresh2 = cv2.threshold(gray2,65,255,cv2.THRESH_BINARY_INV)

diff=cv2.absdiff(thresh2,thresh1)
diff=cv2.bitwise_xor(diff,thresh1)

kernel = np.ones((2,2),np.uint8)
diff=cv2.erode(diff,kernel,iterations = 1 )
diff=cv2.dilate(diff,kernel,iterations = 1)

contours ,b = cv2.findContours(diff,cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)
c=max(contours,key=cv2.contourArea)
x,y,w,h = cv2.boundingRect(c)
cv2.rectangle(diff,(x,y),(x+w,y+h),(125,125,125),2)


cv2.imshow("img1",img1)
cv2.imshow("img2",img2)
cap.release()

cv2.imshow("thresh",diff)
cv2.waitKey(0)

