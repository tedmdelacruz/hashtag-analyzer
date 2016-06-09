from django.shortcuts import render


def index(request):
    return render(request, 'hashtag_analyzer/index.html')
