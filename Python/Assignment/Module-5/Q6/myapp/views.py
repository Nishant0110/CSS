from django.shortcuts import render, get_object_or_404, redirect
from .models import ProductMst, ProductSubCat
from .forms import ProductMstForm, ProductSubCatForm

def product_list(request):
    products = ProductMst.objects.all()
    return render(request, 'myapp/product_list.html', {'products': products})

def product_detail(request, pk):
    product = get_object_or_404(ProductMst, pk=pk)
    sub_categories = ProductSubCat.objects.filter(product=product)
    return render(request, 'myapp/product_detail.html', {'product': product, 'sub_categories': sub_categories})

def product_create(request):
    if request.method == "POST":
        form = ProductMstForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('product_list')
    else:
        form = ProductMstForm()
    return render(request, 'myapp/product_form.html', {'form': form})

def product_update(request, pk):
    product = get_object_or_404(ProductMst, pk=pk)
    if request.method == "POST":
        form = ProductMstForm(request.POST, instance=product)
        if form.is_valid():
            form.save()
            return redirect('product_list')
    else:
        form = ProductMstForm(instance=product)
    return render(request, 'myapp/product_form.html', {'form': form})

def product_delete(request, pk):
    product = get_object_or_404(ProductMst, pk=pk)
    product.delete()
    return redirect('product_list')

def sub_category_create(request, product_id):
    product = get_object_or_404(ProductMst, pk=product_id)
    if request.method == "POST":
        form = ProductSubCatForm(request.POST, request.FILES)
        if form.is_valid():
            sub_category = form.save(commit=False)
            sub_category.product = product
            sub_category.save()
            return redirect('product_detail', pk=product.pk)
    else:
        form = ProductSubCatForm()
    return render(request, 'myapp/sub_category_form.html', {'form': form, 'product': product})
