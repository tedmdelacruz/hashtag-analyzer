from django.http import JsonResponse
import services


def get(request, query=None):
    response = services.search('#' + query)
    return JsonResponse(response.json())
