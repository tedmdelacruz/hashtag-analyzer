import config, base64, requests


def get_bearer_token():
    bearer_token_credentials = base64.b64encode(config.API_KEY + ':' + config.API_SECRET)

    headers = {
        'Host': 'api.twitter.com',
        'User-Agent': config.APP_NAME,
        'Authorization': 'Basic ' + bearer_token_credentials,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Accept-Encoding': 'gzip',
    }
    data = {'grant_type': 'client_credentials'}

    response = requests.post(config.BASE_URL + '/oauth2/token',
        headers=headers, data=data)

    return response

def search(query):
    bearer_token = config.BEARER_TOKEN

    url_params = {'q': query}
    headers = {
        'Host': 'api.twitter.com',
        'User-Agent': config.APP_NAME,
        'Authorization': 'Bearer ' + bearer_token,
        'Accept-Encoding': 'gzip',
    }

    response = requests.get(config.BASE_URL + '/1.1/search/tweets.json',
        params=url_params, headers=headers)

    return response
