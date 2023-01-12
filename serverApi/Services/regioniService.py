import json
# import sys
# sys.path.insert(1,'./serverApi')

from Model.regioniClass import Regione

class Crea_regione:
    def crea():
        with open('./serverApi/regioni.json', 'r', encoding="utf-8") as r:
            regioni_pre_serializzazione = json.load(r, object_hook=Regione.regioni_decoder)
            regioni_post_serializzazione = [vars(r) for r in regioni_pre_serializzazione]
            return regioni_post_serializzazione
