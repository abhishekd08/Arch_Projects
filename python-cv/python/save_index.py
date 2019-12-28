import cv2

cap = cv2.VideoCapture(0)

_, img = cap.read()

cap.release()

cv2.imwrite('person.jpg',img)
