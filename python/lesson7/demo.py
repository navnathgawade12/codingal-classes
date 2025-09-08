m = ["shrek", 64, 74838, "monke"]

print(m[0])
print(m[3])
print(m[2])

print(type(m))
print(len(m))

print(m[0:3])

m.append("mango")

print(m)

m.pop()
print(m)

m.reverse()
print(m)

m.clear()
print(m)

n = {'name': "coconut", 'category': 'mythical' ,'value': '600' , 'demand': '2/10'}

print(type(n))

print(n['value'])
print(n.get('value',0))
n.pop('value')

n['category'] = 'divine'
print(n)

n.clear()