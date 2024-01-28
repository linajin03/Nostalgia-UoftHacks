import pytesseract
from textfromimage import extract_text
pytesseract.pytesseract.tesseract_cmd = "C:\\Program Files\\Tesseract-OCR\\tesseract.exe"
import cv2

def process_image(image_path):
    pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

    img = cv2.imread(image_path)

    d = pytesseract.image_to_data(img, output_type=Output.DICT)

    overlay = img.copy()
    output = img.copy()

    n_boxes = len(d['text'])
    for i in range(18, 25):
        if int(d['conf'][i]) > 60:
            (x, y, w, h) = (d['left'][i], d['top'][i], d['width'][i], d['height'][i])
            img = cv2.rectangle(overlay, (x, y), (x + w, y + h), (0, 255, 0), -1)

    alpha = 0.1
    image_new = cv2.addWeighted(overlay, alpha, output, 1 - alpha, 0, output)

    cv2.imshow('img', image_new)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

if __name__ == "__main__":
    process_image("../pdfs/test.png")
