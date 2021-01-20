import requests

Base = 'http://127.0.0.1:5000/'  # use this for the test server, later we will use the

response = requests.get(Base + '/api/1/get/test')
print(response.json())