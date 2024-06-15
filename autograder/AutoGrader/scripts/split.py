# Import everything needed to edit video clips
from moviepy.editor import *
 
# loading video dsa gfg intro video
clips = []

import os
for i in os.listdir():
    if i.endswith(".mp4"):
        clips.append(VideoFileClip(i))

print(clips)

# concatenating both the clips
final = concatenate_videoclips(clips)
# writing the video into a file / saving the combined video
final.write_videofile("final.avi", fps=60, codec='mpeg4')
 