import interpreter as basic
print("Valour Application Shell 1.0.0\n     type help for help")
while True:
	text = input('>-> ')
	if text.strip() == "":
		continue
	if text.strip() == "help":
		print("https://github.com/SentyFunBall/valour-vapp")
		continue
	result, error = basic.run('<stdin>', text)
	if error:
		print(error.as_string())
	elif result:
		if len(result.elements) == 1:
			print(repr(result.elements[0]))
		else:
			print(repr(result))
