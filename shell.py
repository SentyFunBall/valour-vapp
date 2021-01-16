from vapp import _Run
from colorama import init
init()
print("Valour Application Shell 1.0.1\n looking good update     type help for help")
while True:
	print("\033[36m" + ">->" + "\033[0m", end="")  # color codes don't work with input text
	text = input()
	if text.strip() == "":
		continue
	if text.strip() == "help":
		print("https://github.com/SentyFunBall/valour-vapp")
		continue
	result, error = _Run.run('<stdin>', text)
	if error:
		print("\033[31m" + error.as_string() + "\033[0m")
	elif result:
		if len(result.elements) == 1:
			print(repr(result.elements[0]))
		else:
			print(repr(result))
