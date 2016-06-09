from django.http import JsonResponse
import services


def get(request):
    response = services.search('test')
    return JsonResponse(response.json())
