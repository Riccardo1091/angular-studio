import json

# ?????

class Comune:
    def __init__(self, nome: str, provincia: object, regione: str): 
        self.nome = nome
        self.provincia = provincia
        self.regione = regione

    def __repr__(self):
        return json.dumps({"nomee":self.nome, "provincia":self.provincia['nome'], "regione":self.regione['provincia']['nome']}, indent=2)
    
    @staticmethod
    def comuni_decoder(obj):
        return Comune(obj['nome'], obj['provincia']['nome'], obj['regione']['nome'])

with open('./serverApi/comuni.json', 'r', encoding="utf-8") as c:
    comuni_pre_serializzazione = json.load(c, object_hook=Comune.comuni_decoder)
    comuni_post_serializzazione = [Comune.comuni_decoder(record) for record in comuni_pre_serializzazione ]

print(comuni_post_serializzazione)

