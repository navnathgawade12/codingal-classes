class vegetables:
    def __init__(self,name,prize,color):
        self.name = name
        self.prize = prize

    def eatvegetables(self):
        print(f'vegetables which is {self.name} are very healthy for health')




class fruitvegetables:
    def __init__(self,name,prize,color,taste):
        self.taste = taste
        super().__init__(name,prize,color)


m1 = fruitvegetables('lemon', 5 ,'lime yellow', 'sour')

m1.eatvegetables()