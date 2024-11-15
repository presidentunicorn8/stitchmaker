from django.shortcuts import render
#from .models import ClothingItem

def character_customization(request):
    clothing_items = [] #ClothingItem.objects.all()
    return render(request, 'template3.html', {'clothing_items': clothing_items})