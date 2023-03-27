import requests
import xmltodict
import json
import pandas as pd

atom_url = "https://open.canada.ca/data/en/api/action/package_show?id=adad580f-76b0-4502-bd05-20c125de9116"

# Download Atom file
response = requests.get(atom_url)
atom_data = response.text

# Convert Atom file to JSON
json_data = json.loads(json.dumps(xmltodict.parse(atom_data)))

# Get link to JSON file
json_url = json_data["feed"]["entry"]["link"][-1]["@href"]

# Download JSON file
response = requests.get(json_url)
json_data = response.json()

# Load JSON data into pandas DataFrame
df = pd.DataFrame(json_data)

# Write DataFrame to CSV file
df.to_csv("data.csv", index=False)