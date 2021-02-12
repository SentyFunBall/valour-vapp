from markdown import markdown
file = input("file name: ")
with open(file + ".md", 'r') as f:
    text = f.read()

with open(file + ".html", 'w') as f:
    f.write(markdown(text))
