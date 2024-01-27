"""
Class of entity sticky Notes, will have functions that update and delete sticky notes
"""

class StickyNotes:

    def __init__(self, id, topic, description, coordinates):
        self.id = id
        self.topic = topic
        self.description = description
        self.coordinates = coordinates
        self.isTrashed = False; 

    def set_topic(self, topic):
        self.topic = topic
    
    def set_description(self, description):
        self.description = description

    def delete(self, isTrashed):
        self.isTrashed = isTrashed