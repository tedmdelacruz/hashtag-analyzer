from django.http import JsonResponse, HttpResponse
from json import JSONDecoder 
import services

def analyze(request):
    data = JSONDecoder().decode(request.body)

    text = ''
    for item in data['data']:
        text += item['text']

    response = services.analyze(text)

    return JsonResponse(response.json())

