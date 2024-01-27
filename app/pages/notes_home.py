from taipy.gui import Gui, notify, Markdown

notes_md = Markdown("""

#Notes#
                    
<|layout|columns=20vw 20vw 20vw|align-columns-center|

<|first column
<|{"folder_yellow.png"}|image|width=10vw|>
Math
|>

<|second column
<|text_center|
<|{"folder_yellow.png"}|image|width=10vw|>
Science
|>
|>

<|third column
<|text_center|
<|{"folder_yellow.png"}|image|width=10vw|>
English
|>
|>
                    
|>

""")

def run(state):
    print("run_notes")