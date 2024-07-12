from django.shortcuts import render, redirect
import requests

def index(request):
    if request.method == "POST":
        url = "http://localhost:8001/api/books"
        querystring = {
            'title': request.POST['title'],
            'author': request.POST['author'],
            'isbn': request.POST['isbn'],
            'publisher': request.POST['publisher'],
        }
        if request.POST.get('id'):  # Check if we are editing an existing book
            book_id = request.POST['id']
            response = requests.put(f"{url}/{book_id}", json=querystring)
        else:  # We are adding a new book
            response = requests.post(url, json=querystring)
        return redirect('fetch-data')
    else:
        return render(request, 'index.html')

def fetch_data(request):
    url = "http://localhost:8001/api/books"
    response = requests.get(url)
    data = response.json()
    msg = "Data Fetched Successfully"
    return render(request, 'index.html', {'l': data, 'msg': msg})

def edit_book(request, pk):
    url = f'http://127.0.0.1:8001/api/books/{pk}/'
    print("edit")
    if request.method == "POST":
        print("post")
        data = {'title': request.POST.get('title'),'author': request.POST.get('author'),'isbn': request.POST.get('isbn'),'publisher': request.POST.get('publisher')}
        response = requests.put(url, json=data)
        return redirect('fetch-data')
    else:
        print("get")
        response = requests.get(url)
        if response.status_code == 200:
            book = response.json()
            print("Book : ",book)
            return render(request, 'edit.html', {'book': book})
        else:
            return redirect('index')
            
def delete_book(request, book_id):
    url = f'http://127.0.0.1:8001/api/books/{book_id}/'
    response = requests.delete(url)
    return redirect('fetch-data')
