class circle:
    def __init__(self,r):
        self.r = r


    def area(self):
        return 3.14 * self.r * self.r

class square:
    def __init__(self,r):
        self.r = r 

    def area(self):
        return self.r * self.r 

c1 = circle(5)
s1 = square(5)

print(c1.area())
print(s1.area())

class account:
    def __init__(self):
        self.__balance = 15000

    def check_balance(self):
        return self.__balance 


m1 = account()

print(m1.check_balance())

yash = account()