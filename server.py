import time

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/chargers", methods=["GET"])
def index():
    return jsonify(
        {
            "idx": "1",
            "status": "alice@outlook.com",
            "details": "70%",
            "timestamp": time.time(),
        }
    )


app.run(debug=True, host="127.0.0.1", port=5000)
