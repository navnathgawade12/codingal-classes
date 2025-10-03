file = open("python\lesson13\elmacho.txt",'r')

print(file.read())

file = open('python\lesson13\elmacho.txt','w')

file.write('he was ruthless he was dangerous and as the name implies very macho.')

file = open('python\lesson13\elmacho.txt','a')

file.write('but as all the greats he wa gone too soon.')

file.close()