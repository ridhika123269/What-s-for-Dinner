from flask import Flask, request, jsonify
from flask_cors import CORS
from ultralytics import YOLO
import os
import requests

app = Flask(__name__)
CORS(app)

model = YOLO("yolov8n.pt")

SPOONACULAR_API_KEY = "1a61b0965c3e4d81bc29f00b3eab277f"

@app.route("/detect", methods=["POST"])
def detect():
    if "image" not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    file = request.files["image"]

    upload_folder = os.path.join(os.getcwd(), "uploads")
    os.makedirs(upload_folder, exist_ok=True)
    path = os.path.join(upload_folder, file.filename)
    file.save(path)

    results = model(path)
    labels = set()
    for result in results:
        for box in result.boxes:
            class_id = int(box.cls[0])
            class_name = model.names[class_id]
            labels.add(class_name)

    os.remove(path)
    return jsonify({"detectedIngredients": list(labels)})

@app.route("/recipes", methods=["POST"])
def get_recipes():
    data = request.get_json()
    ingredients = data.get("ingredients", [])

    if not ingredients:
        return jsonify({"error": "No ingredients provided"}), 400

    ingredients_query = ",".join(ingredients)

    url = f"https://api.spoonacular.com/recipes/findByIngredients"
    params = {
        "ingredients": ingredients_query,
        "number": 5,
        "ranking": 1,
        "ignorePantry": True,
        "apiKey": SPOONACULAR_API_KEY,
    }

    response = requests.get(url, params=params)
    response.raise_for_status()
    recipes = response.json()

    return jsonify({"recipes": recipes})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)
