from taipy.gui import Gui, notify, Markdown

value1 = 10
value2 = 10
value3 = 10

home_md = Markdown("""
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

""")

def run(state):
    print("run_home")