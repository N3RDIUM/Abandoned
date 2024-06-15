from OpenGL.GL import *
from OpenGL.GLU import *

import numpy as np
import threading
import random
import time

import math
def convert_K_to_RGB(colour_temperature):
    """
    Converts from K to RGB, algorithm courtesy of 
    http://www.tannerhelland.com/4435/convert-temperature-rgb-algorithm-code/
    """
    #range check
    if colour_temperature < 1000: 
        colour_temperature = 1000
    elif colour_temperature > 40000:
        colour_temperature = 40000
    
    tmp_internal = colour_temperature / 100.0
    
    # red 
    if tmp_internal <= 66:
        red = 255
    else:
        tmp_red = 329.698727446 * math.pow(tmp_internal - 60, -0.1332047592)
        if tmp_red < 0:
            red = 0
        elif tmp_red > 255:
            red = 255
        else:
            red = tmp_red
    
    # green
    if tmp_internal <=66:
        tmp_green = 99.4708025861 * math.log(tmp_internal) - 161.1195681661
        if tmp_green < 0:
            green = 0
        elif tmp_green > 255:
            green = 255
        else:
            green = tmp_green
    else:
        tmp_green = 288.1221695283 * math.pow(tmp_internal - 60, -0.0755148492)
        if tmp_green < 0:
            green = 0
        elif tmp_green > 255:
            green = 255
        else:
            green = tmp_green
    
    # blue
    if tmp_internal >=66:
        blue = 255
    elif tmp_internal <= 19:
        blue = 0
    else:
        tmp_blue = 138.5177312231 * math.log(tmp_internal - 10) - 305.0447927307
        if tmp_blue < 0:
            blue = 0
        elif tmp_blue > 255:
            blue = 255
        else:
            blue = tmp_blue
    
    return red, green, blue

state_template = {
    "radius": .1,
    "position": np.array([0, 0, 0], dtype=np.float32),
    "velocity": np.array([0, 0, 0], dtype=np.float32),
    "acceleration": np.array([0, 0, 0], dtype=np.float32),
    "mass": 0.0,
    "drag": 0.98,
    "temperature": 1000.0,
}

sphere = gluNewQuadric()


class Particle:
    """
    A very lightweight particle class
    """
    def __init__(self, state={}, parent=None):
        self.parent = parent
        self.state = {**state_template, **state}

    def update(self):
        self.state["velocity"] += self.state["acceleration"]
        self.state["position"] += self.state["velocity"]
        self.state["velocity"] *= self.state["drag"]

        self.state["velocity"] += np.array([random.uniform(-0.00001, 0.00001) * (self.state["temperature"] + 273.5) for i in range(3)])
        self.state["temperature"] *= 0.999 + random.uniform(-0.0001, 0.0001)

    def draw(self):
        glPushMatrix()
        glTranslatef(*self.state["position"])
        r, g, b = convert_K_to_RGB(self.state["temperature"] + 273.15)
        if r > 255:
            r = 255
        if g > 255:
            g = 255
        if b > 255:
            b = 255
        glColor3f(r / 256, g / 256, b / 256)
        glPointSize(8)
        glBegin(GL_POINTS)
        glVertex3f(0, 0, 0)
        glEnd()
        glPopMatrix()

    def __repr__(self):
        return self.state

    def __str__(self):
        return 'Particle with state: {}'.format(self.state)

    def __eq__(self, other):
        return self.state == other.state

    def __hash__(self):
        return hash(self.state)

class ParticleSystem:
    """
    A particle system is a collection of particles
    """
    def __init__(self, particles=[]):
        self.particles = particles
        self.thread = threading.Thread(target=self._update, daemon=True)
        self.thread.start()
    
    def add(self, particle):
        self.particles.append(particle)

    def remove(self, particle):
        self.particles.remove(particle)

    def _update(self):
        while True:
            time.sleep(1/60)
            for particle in self.particles:
                particle.update()

    def draw(self):
        for particle in self.particles:
            particle.draw()

    def __str__(self):
        return 'Particle system with {} particles'.format(len(self.particles))
