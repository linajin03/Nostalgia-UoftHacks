from taipy.gui import Gui, notify

value1 = 10
value2 = 10
value3 = 10
text = "Original text"


section1 = """
<|Expandable Page One|expandable|expandable=False|
#Our Very First Taipy Application

<|layout|columns=1 1 1|

<|first column
<|container container-styling|
###Slider 1 <br/>
Slider value: <|{value1}|> <br/>
<|{value1}|slider|>
|>
|>

<|second column
<|container container-styling|
###Slider 2 <br/>
Slider value: <|{value2}|> <br/>
<|{value2}|slider|>
|>
|>

<|third column
<|container container-styling|
###Slider 3 <br/>
Slider value: <|{value3}|> <br/>
<|{value3}|slider|>
|>
|>
|>
|>
"""

section2 = """
<|toggle|theme|>

<|layout|columns=1 1|
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

"""

def on_button_action(state):
    notify(state, 'info', f'The text is: {state.text}')
    state.text = " Pressed"

pages = {"/":"<|toggle|theme|>\n<center>\n<|navbar|>\n</center>",
         "One":section1,
         "Two":section2}

Gui(pages=pages, css_file = 'main.css').run(use_reloader=True, port=5001)


# use_reloader=True 
# port=xxxx to run possible servers
# '#' creates title, ## makes subtitle, test in * for italics or ** for bold

# <|{variable}|visual_element_name|param_1=param_1|param_2=param_2| ... |>
# <|{variable}|slider|min=min_value|max=max_value|>

#page="""
# Gui(page).run()
# <|layout|columns=1 4|

# <|container container-styling|
# <|{content}|file_download|label=Download|>
# |>

# <|{data}|chart|type=bar|x=Country|y=Average Age|orientation=v|>

# |>
# """
# content = "a.csv"


# notify(state, notification_type, message)

# from taipy.gui import navigate
# "/":"<|menu|label=Menu|lov={[('section1', 'Page 1'), ('section2', 'Page 2')]}|on_action=on_menu|>"
# def on_menu(state, action, info):
#     page = info["args"][0]
#     navigate(state, to=page)

# <|text_center|
# <|{logo.png}|image|width=25vw|>
# >

# img_path = "place_holder.png"
# content = ""
# <|{content}|file_selector|extensions=.png|>
# select an image from your file system

# def on_change(state, var_name, var_val):
#   if var_name == "content":
#       state.img_path = var_va;
#   print(var_name, var_val) --> this prints to terminal