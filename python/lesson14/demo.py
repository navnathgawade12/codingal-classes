file = open('python\lesson14\sample-doc.txt','r')

content = file.read(11)

print(content)

file.close()

file = open('python\lesson14\sample-doc.txt','r')

content = file.readline()

print(content)

file.close()

file = open('python\lesson14\sample-doc.txt','r')

content1 = file.readline()
content2 = file.readline()
content3 = file.readline()

print(content1)
print(content2)
print(content3)

file.close()

file = open('python\lesson14\sample-doc.txt','r')

content = file.readlines()

print(content)

file.close()