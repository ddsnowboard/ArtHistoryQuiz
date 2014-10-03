# This is the python script that converts the human-readable text in MASTER.txt into computer-readable text in cards.js. 
# There's no reason to edit this either; just edit MASTER.txt, then whenever you're done, run this and it will edit cards.js
# accordingly. 
import re
with open("MASTER.txt", 'r') as m:
	with open("cards.js", 'w') as o:
		o.write("var cards = [")
		picture = True
		line = 0
		for i in m:
			line += 1
			if picture and i == '\n':
				raise Exception("You need a picture at line %d" % line)
			elif re.search(r"^[/]{2}", i):
				pass			
			elif picture:
				o.write("{front: '<img src=\"pictures/%s\" />', back: '" % i.replace('\n', ''))
				picture = False
			elif i == '\n' and not picture:
				o.write("'}, ")
				picture = True
			else:
				o.write(i.replace('\n', '<br/>').replace("'", r"\'"))
		o.write("'}];")