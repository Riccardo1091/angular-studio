import json

class Provincia:
    def __init__(self, nome: str, regione: str): 
        self.nome = nome
        self.regione = regione

    def __repr__(self):
        return self.nome, self.regione

    def decoder(obj):
        return Provincia(obj['nome'], obj['regione'])