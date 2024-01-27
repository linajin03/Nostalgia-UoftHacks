from taipy import Gui

text = "Original text"

page = """
# Getting started with Taipy GUI

My text: <|{text}|>

<|{text}|input|>
"""

Gui(page).run(port=5001, use_reloader=True) # use_reloader=True