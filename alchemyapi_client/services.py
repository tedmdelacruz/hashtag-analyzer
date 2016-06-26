import config, requests

def analyze(text):
    data = {
        'apikey': config.API_KEY,
        'text': text,
        'outputMode': 'json',
    }

    response = requests.post(config.BASE_URL + '/calls/text/TextGetEmotion',
        data=data)

    return response
