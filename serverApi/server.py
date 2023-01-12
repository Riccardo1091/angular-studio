from flask import Flask, jsonify, json
from flask_cors import CORS
import random
import sys

# per risolvere conflitti sui percorsi
sys.path.insert(1,'./serverApi/Services')
from Services.regioniService import Crea_regione
from Services.provinceService import Crea_provincia
from Services.comuniService import Crea_comune

app = Flask(__name__)
CORS(app)
#app.url_map.strict_slashes = False

@app.route('/')
def index():
    return jsonify('Api per Regioni, Province, Comuni attiva')

@app.route('/regioni')
def get_regioni():

    # with open('./serverApi/regioni.json', encoding='utf8') as file:
    #     _regioni = json.load(file)

    return jsonify(Crea_regione.crea())

@app.route('/province/<string:regione>/')
@app.route('/province/<string:regione>/<string:caratteri>')
def get_province(regione:str, caratteri:str|None=None):

    # with open('./serverApi/province.json', encoding='utf8') as p:
    #     province = json.load(p)
    if caratteri is None:
        prov = [p for p in Crea_provincia.crea() if p['regione'].lower() == regione.lower()]
    else:
        prov = [p for p in Crea_provincia.crea() if p['regione'].lower() == regione.lower()
        and caratteri.lower() in p['nome'].lower()]
    return jsonify(prov)

@app.route('/comuni/<string:provincia>/')
@app.route('/comuni/<string:provincia>/<string:caratteri>')
def get_comuni(provincia:str, caratteri:str|None=None):

    # with open('./serverApi/comuni.json', encoding='utf8') as c:
    #     comuni = json.load(c)

    if caratteri is None:
        #com = [c for c in comuni if c['provincia']['nome'].lower() == provincia.lower()]
        com = [c for c in Crea_comune.crea() if c['provincia'].lower() == provincia.lower()]
    else:
        #com = [c for c in comuni if c['provincia']['nome'].lower() == provincia.lower()
        com = [c for c in Crea_comune.crea() if c['provincia'].lower() == provincia.lower()
        and caratteri.lower() in c['nome'].lower()]
    return jsonify(com)

@app.route('/randomImg')
def get_random_img():
    
    with open('./serverApi/imgCani.json') as i:
        imgCani = json.load(i)

        return jsonify(random.choice(imgCani))

if __name__ == '__main__':
    app.run(port=9000)