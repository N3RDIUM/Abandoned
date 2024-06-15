import cv2

class ImageArray:
    """
    ImageArray
    
    A class to store a list of images in memory.
    """
    def __init__(self, filenames):
        """
        Initialize the ImageArray class.
        
        :param filenames: A list of filenames to load into memory.
        """
        self.filenames = filenames
        self.images = [cv2.imread(filename) for filename in filenames]
    
    # Mimic a list
    def __len__(self):
        return len(self.filenames)
    
    def __getitem__(self, index):
        return self.images[index]
    
    def __setitem__(self, index, value):
        self.images[index] = value

    def __iter__(self):
        return iter(self.images)
    
    def __repr__(self):
        return f"ImageArray({self.filenames})"
    
    def __str__(self):
        return f"ImageArray({self.filenames})"
    
    def append_file(self, filename):
        """
        Append a filename to the ImageArray.
        
        :param filename: The filename to append.
        """
        self.filenames.append(filename)
        self.images.append(cv2.imread(filename))
        
    def append(self, image):
        """
        Append an image to the ImageArray.
        
        :param image: The image to append.
        """
        self.images.append(image)