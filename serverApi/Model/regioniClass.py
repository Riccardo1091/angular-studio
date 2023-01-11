from flask import json

class Regione:
    def __init__(self, nome: str): 
        self.nome = nome

    def __repr__(self):
        #return f'{self.nome}'
        return json.dumps({"nome":self.nome})

    def regioni_decoder(obj):
        return Regione(obj['nome'])

with open('./serverApi/regioni.json', 'r', encoding="utf-8") as r:
    regioni_pre_serializzazione = json.load(r, object_hook=Regione.regioni_decoder)
    regioni_post_serializzazione = [vars(r) for r in regioni_pre_serializzazione]

    print(regioni_pre_serializzazione)
    print('----')
    print(regioni_post_serializzazione)