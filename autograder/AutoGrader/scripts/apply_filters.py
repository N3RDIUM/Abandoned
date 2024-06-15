from PIL import Image, ImageFilter
import cv2
from multiprocessing import Pool
import os,psutil
import tqdm

def apply(path):
    if not os.path.isdir(os.path.dirname(path) + "/trash"):
        os.mkdir(os.path.dirname(path) + "/trash")
    
    print("{} [INFO] Sharpening image: {}".format(os.getpid(), path))
    print("{} [INFO] Reading image {}".format(os.getpid(), path))
    img = cv2.imread(path)
    print("{} [INFO] Denoising image {}".format(os.getpid(), path))
    noiseless = cv2.fastNlMeansDenoisingColored(img, None, 10, 10, 7, 21)
    print("{} [INFO] Writing denoised image {}".format(os.getpid(), path))
    cv2.imwrite(path, noiseless)

    print("{} [INFO] Converting {} to PIL image...".format(os.getpid(), path))
    img = Image.open(path)
    print("{} [INFO] Applying filter: PIL.ImageFilter.SHARPEN to {}".format(os.getpid(), path))
    img = img.filter(ImageFilter.SHARPEN)
    print("{} [INFO] Writing sharpened image {}".format(os.getpid(), path))
    img.save(path)

    print("{} [INFO] Converting to cv2 image {}".format(os.getpid(), path))
    img = cv2.imread(path)
    print("{} [INFO] Computing motion blur on image {}".format(os.getpid(), path))
    motion_blur = cv2.Laplacian(img, cv2.CV_64F).var()
    if motion_blur > 10:
        print("{} [INFO] Motion blur detected, discarding image {} to {}".format(os.getpid(), path, os.path.join(os.path.dirname(path), "trash", os.path.basename(path))))
        os.rename(path, os.path.join(os.path.dirname(path), "trash", os.path.basename(path)))
    else:
        print("{} [INFO] Motion blur not detected, keeping image {} with motion blur {}".format(os.getpid(), path, motion_blur))
        os.rename(path, os.path.join(os.path.dirname(os.path.dirname(path)), "lights_processed", os.path.basename(path)))

def apply_from_folder(folder):
    data = os.listdir(folder)
    to_remove = []
    for filename in data:
        if not filename.endswith(".jpg"):
            to_remove.append(filename)
    for filename in to_remove:
        data.remove(filename)
    with Pool(psutil.cpu_count()) as pool:
        r = list(tqdm.tqdm(pool.imap(apply, [os.path.join(folder, filename) for filename in data]), total=len(data)))

if __name__ == '__main__':
    apply_from_folder("./lights/")