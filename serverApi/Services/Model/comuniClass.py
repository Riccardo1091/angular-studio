import json

class Comune:
    def __init__(self, nome, provincia, regione):
        self.nome = nome
        self.provincia = provincia
        self.regione = regione
    
    def __repr__(self):
        return json.dumps({
            "nome":self.nome,
            "provincia":self.provincia,
            "regione":self.regione})