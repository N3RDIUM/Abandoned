from PIL import Image, ImageEnhance
from multiprocessing import Pool
import os, tqdm, psutil

def lighten(path):
    img = Image.open(path)
    
    # increase iso
    enhancer = ImageEnhance.Brightness(img)
    img = enhancer.enhance(2)

    img.save(path)

def sharpen_from_folder(folder):
    # speed up by using multiprocessing
    data = os.listdir(folder)
    with Pool(psutil.cpu_count()) as pool:
        r = list(tqdm.tqdm(pool.imap(lighten, [os.path.join(folder, i) for i in data]), total=len(data)))

if __name__ == '__main__':
    sharpen_from_folder("./lights/")

