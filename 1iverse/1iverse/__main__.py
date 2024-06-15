import glfw
import random
from OpenGL.GL import *
from OpenGL.GLU import *

if not glfw.init():
    raise Exception("glfw can not be initialized!")

from player import Player
from particle import ParticleSystem, Particle

window = glfw.create_window(800, 500, "1inverse", None, None)
glfw.make_context_current(window)

player = Player(window)
particles = ParticleSystem()
for i in range(1200):
    particles.add(Particle({
            "position": [random.random() * 20 - 10, random.random() * 2 - 1, random.random() * 20 - 10],
        }, window))

def get_window_size():
    width, height = glfw.get_window_size(window)
    return width, height

# render loop
while not glfw.window_should_close(window):
    glfw.poll_events()
    glfw.swap_buffers(window)
    w, h = get_window_size()

    glMatrixMode(GL_PROJECTION)
    glLoadIdentity()
    try:
        gluPerspective(70, w / h, 0.1, 1000)
    except ZeroDivisionError:
        pass
    glMatrixMode(GL_MODELVIEW)
    glLoadIdentity()
    glViewport(0, 0, *get_window_size())

    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)
    glClearColor(0.5, 0.7, 1, 1.0)

    player.update()
    particles.draw()
    
glfw.terminate()
