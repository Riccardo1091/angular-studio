import json
from Model.provinceClass import Provincia

class Crea_provincia:
    def crea():
        with open('./serverApi/province.json', 'r', encoding="utf-8") as p:
            province_pre_serializzazione = json.load(p, object_hook=Provincia.decoder)
            province_post_serializzazione = [vars(p) for p in province_pre_serializzazione]
            return province_post_serializzazione