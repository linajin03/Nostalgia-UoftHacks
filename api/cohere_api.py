import cohere
co = cohere.Client('mUf7LULz96DtLuekcvXidal3MtJ9OeyOekluhHQz')

# make function for summarizing code 
def summarize_text(text):
    response = co.summarize(
  text=text, length='short', format='bullets'
)
    return response