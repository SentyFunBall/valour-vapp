import requests

Base = 'http://127.0.0.1:5000/'  # use this for the 'base_url' test server, later we will use the valour link


def get(base_url, final):
    response = requests.get(base_url + final)
    return response.json().keys(), response.json().values()


def post_something(base_url, final, something_key, something_value):
    dict_ = dict(zip(something_key, something_value))
    response = requests.put(base_url + final, dict_)
    return response.json().keys(), response.json().values()
