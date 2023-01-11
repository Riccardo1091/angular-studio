import json

class Comune:
    def __init__(self, nome, provincia, regione):
        self.nome = nome
        self.provincia = provincia
        self.regione = regione
    
    def __repr__(self):
        return json.dumps({"nome":self.nome, "provincia":self.provincia, "regione":self.regione}, indent=4)

with open("./serverApi/comuni.json", encoding="utf-8") as json_file:
    data = json.load(json_file)

comuni_pre_serializzazione = []

for comune in data:
    nome = comune["nome"]
    provincia = comune["provincia"]["nome"]
    regione = comune["regione"]["nome"]
    comuni_pre_serializzazione.append(Comune(nome, provincia, regione))

comuni_post_serializzazione = [vars(c) for c in comuni_pre_serializzazione]

print(comuni_post_serializzazione)