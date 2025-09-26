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


from abc import ABC 

class game(ABC):
    def get_minecraft_game(self):
    pass

    def play_the_game(self):
        pass

class minecraft(game):
    def get_minecraft_game(self):
        print("go to the store")
        print("get the minecraft game")
        print("pay and take the game")

    def play_the_game(self):
        print("bought minecraft")
        print("found a village")
        print("burned the village")
        print("got home and played minecraft")