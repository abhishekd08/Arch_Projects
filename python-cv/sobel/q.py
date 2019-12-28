import cv2

cap = cv2.VideoCapture(0)

while True:
    _, frame = cap.read()
    s = cv2.Canny(frame, 200, 200)
    cv2.imshow('s',s)
    k= cv2.waitKey(1)

    if k==27:
        break 


cv2.destroyAllWindows()
cap.release()
