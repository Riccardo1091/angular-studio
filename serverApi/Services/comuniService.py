import json
from Model.comuniClass import Comune

class Crea_comune:
    def crea():
        with open("./serverApi/comuni.json", encoding="utf-8") as json_file:
            data = json.load(json_file)

        comuni_pre_serializzazione = []

        for comune in data:
            nome = comune["nome"]
            provincia = comune["provincia"]["nome"]
            regione = comune["regione"]["nome"]
            comuni_pre_serializzazione.append(Comune(nome, provincia, regione))

        comuni_post_serializzazione = [vars(c) for c in comuni_pre_serializzazione]
        return comuni_post_serializzazione