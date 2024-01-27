from taipy.gui import Gui, navigate
from pages.home import home_md
from pages.second import second_md
from pages.notes_home import notes_md

pages = {"/":"<|toggle|theme|>\n<center>\n<|navbar|>\n</center>",
         "home": home_md, 
         "secondary": second_md,
         "notes": notes_md}

Gui(pages=pages, css_file = 'main.css').run(use_reloader=True, port=5000)