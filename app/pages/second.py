from taipy.gui import Gui, notify, navigate, Markdown

text = "Original text"

second_md = Markdown("""
<|toggle|theme|>

<|layout|columns=1 1 1|
<|
My text: <|{text}|>

Enter a word:
<|{text}|input|>
<|Run local|button|on_action=on_button_action|>
|>


<|Table|expandable|
<|{"dataframe"}|table|width=100%|>
|>
|>

<|
<|Click to go Home|button|on_action=go_home|>
|>

""")

def on_button_action(state):
    notify(state, 'info', f'The text is: {state.text}')
    state.text = " Pressed"

def go_home(state):
    navigate(state, "home")

def run(state):
    print("run_sec")