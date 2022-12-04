# Importing all required libraries.
import pickle
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

# Loading the trained model.
model = pickle.load(open('./model.pkl', 'rb'))

# Instancing the server.
app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Instancing the predict route.
@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():

	# Getting the json from request.
	json = request.get_json()

	# Instancing the raw dataframe.
	if json:
		if isinstance(json, dict):
			df_raw = pd.DataFrame(json, index=[0])
		else:
			df_raw = pd.DataFrame(json, columns=json[0].keys())

	# Making the prediction
	pred = model.predict(df_raw)

	if(pred[0] == 1):
		return {"predito": pred[0], "tempo":"1 a 3 anos", "classificacao":"muito baixo"}
	elif(pred[0] == 2):
		return {"predito": pred[0], "tempo":"3 a 6 anos", "classificacao":"baixo"}
	elif(pred[0] == 3):
		return {"predito": pred[0], "tempo":"6 a 9 anos", "classificacao":"médio"}
	elif(pred[0] == 4):
		return {"predito": pred[0], "tempo":"9 a 12 anos", "classificacao":"alto"}

if __name__ == '__main__':

	# Starting flask.
	app.run(host='0.0.0.0', port='5000')