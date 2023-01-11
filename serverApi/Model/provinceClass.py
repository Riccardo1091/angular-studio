from flask import json

class Provincia:
    def __init__(self, nome: str, regione: str): 
        self.nome = nome
        self.regione = regione

    def __repr__(self):
        return self.nome, self.regione

    def decoder(obj):
        return Provincia(obj['nome'], obj['regione'])

with open('./serverApi/province.json', 'r', encoding="utf-8") as p:
    province_pre_serializzazione = json.load(p, object_hook=Provincia.decoder)
    province_post_serializzazione = [vars(p) for p in province_pre_serializzazione]

    # print(province_pre_serializzazione)
    # print('----')
    # print(province_post_serializzazione)