
import cv2
import argparse
import sys

keep_processing = True;

parser = argparse.ArgumentParser(description='Perform ' + sys.argv[0] + ' example operation on incoming camera/video image')
parser.add_argument("-c", "--camera_to_use", type=int, help="specify camera to use", default=0)
parser.add_argument('video_file', metavar='video_file', type=str, nargs='?', help='specify optional video file')
args = parser.parse_args()

cap = cv2.VideoCapture();

(major, minor, _) = cv2.__version__.split(".")
if ((major == '3') and (minor == '1')):
    cv2.ocl.setUseOpenCL(False);

windowName = "Live Camera Input"; 
windowNameBG = "Background Model"; 
windowNameFG = "Foreground Objects"; 
windowNameFGP = "Foreground Probabiity"


if (((args.video_file) and (cap.open(str(args.video_file))))
    or (cap.open(args.camera_to_use))):

    cv2.namedWindow(windowName, cv2.WINDOW_NORMAL);
    cv2.namedWindow(windowNameBG, cv2.WINDOW_NORMAL);
    cv2.namedWindow(windowNameFG, cv2.WINDOW_NORMAL);
    cv2.namedWindow(windowNameFGP, cv2.WINDOW_NORMAL);

    mog = cv2.createBackgroundSubtractorMOG2(history=2000, varThreshold=16, detectShadows=True);

    print("\nPress <space> to reset MoG model ...\n")

    while (keep_processing):

        if (cap.isOpened):
            ret, frame = cap.read();

            if (ret == 0):
                keep_processing = False;
                continue;

        fgmask = mog.apply(frame);

        fgthres = cv2.threshold(fgmask.copy(), 200, 255, cv2.THRESH_BINARY)[1];
        fgdilated = cv2.dilate(fgthres, kernel=cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3,3)), iterations = 3);

        bgmodel = mog.getBackgroundImage();

        cv2.imshow(windowName,frame);
        cv2.imshow(windowNameFG,fgdilated);
        cv2.imshow(windowNameFGP,fgmask);
        cv2.imshow(windowNameBG, bgmodel);

        key = cv2.waitKey(40) & 0xFF; 

        if (key == ord('x')):
            keep_processing = False;
        elif (key == ord(' ')):
            print("\nResetting MoG background model ...\n")
            mog = cv2.createBackgroundSubtractorMOG2(history=2000, varThreshold=16, detectShadows=True);

    cv2.destroyAllWindows()

else:
    print("No video file specified or camera connected.");
