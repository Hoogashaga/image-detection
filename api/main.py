import os
import requests
from flask import Flask, request
from dotenv import load_dotenv
from flask_cors import CORS


load_dotenv(dotenv_path="./.env.local")
# print(os.environ.get("UNSPLASH_KEY", ""))

URL = "https://api.unsplash.com/photos/random"
UNSPLASH_KEY = os.environ.get("UNSPLASH_KEY", "")
DEGUB = bool(os.environ.get("DEBUG", True))

if not UNSPLASH_KEY:
    raise EnvironmentError("UNSPLASH_KEY is not set, please createa .env.local file and set the UNSPLASH_KEY environment variable")

# new isinstance of Flask
app = Flask(__name__)
CORS(app)

# degun mode is on
app.config["DEBUG"] = DEGUB

@app.route("/new-image")
def new_image():
    word = request.args.get("query")
    headers = {
      "Accept-Version": "v1",
      "Authorization": "Client-ID " + UNSPLASH_KEY
    }
    params = {"query": word}
    res = requests.get(url=URL, headers=headers, params=params)
    data = res.json()
    return data

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)
