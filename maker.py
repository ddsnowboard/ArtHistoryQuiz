# -*- coding: ANSI -*-
with open("MASTER.txt", 'r') as m:
	with open("cards.js", 'w') as o:
		o.write("var cards = [")
		picture = True
		line = 0
		for i in m:
			line += 1
			if picture and i == '\n':
				raise Exception("You need a picture at line %d" % line)
			elif picture:
				o.write("{front: '<img src=\"%s\" />', back: '" % i.replace('\n', ''))
				picture = False
			elif i == '\n' and not picture:
				o.write("'}, ")
				picture = True
			else:
				o.write(i.replace('\n', '<br/>').replace("'", r"\'"))
		o.write("'}];")