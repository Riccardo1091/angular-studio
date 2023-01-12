import json

class Regione:
    def __init__(self, nome: str): 
        self.nome = nome

    def __repr__(self):
        #return f'{self.nome}'
        return json.dumps({"nome":self.nome})

    def regioni_decoder(obj):
        return Regione(obj['nome'])