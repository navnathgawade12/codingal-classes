class monkey:
    height = '30ft'

    def __init__(self,color):
        print("animals are in this class")
        self.color = color


    def do_sum(self,l,m,n,o):
        self.jaguar = l + m + n + o

m = monkey("purple")

print(m)
print(m.do_sum(428,37,9,318))
print(m.jaguar)

t = monkey("red")
t.do_sum(428,37,9,318)
print(t.jaguar)