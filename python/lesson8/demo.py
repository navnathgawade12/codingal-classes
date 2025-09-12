turtle = (28,389,637,297,475,3)

print(turtle)
print(turtle[0])
print(turtle[5])

for s in range(0, len(turtle)):
    print(turtle[s])

print(turtle[1:4])

spooderman = {1,2,3,5,4,8,6,7,0}
monke = {6423,2841,8345,64,3,9,0}

print(spooderman)
print(type(spooderman))

spooderman.add(9)

print(spooderman)

print(spooderman.intersection(monke))
print(spooderman.union(monke))

print(spooderman.difference(monke))
print(monke.symmetric_difference(spooderman))