from django.shortcuts import render


def index(request):
    return render(request, 'hashtag_analyzer/index.html')

def analyze(request, query=None):
    return render(request, 'hashtag_analyzer/analyze.html', {'query': query})
