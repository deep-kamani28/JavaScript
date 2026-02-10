class Product {
  constructor(title, img, desc, price) {
    ((this.title = title),
      (this.imageUrl = img),
      (this.description = desc),
      (this.price = price));
  }
}

class ProductItem{
    constructor(product){
        this.product=product;
    }

    render(){
        const prodEl=document.createElement('li');
        prodEl.className='product-item';
        prodEl.innerHTML=`<div>
            <img src='${this.product.imageUrl}' alt='${this.product.title}'>
            <div class='product-item__content'>
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to cart</button>
            </div>
        </div>`
        // const addToCartButton=prodEl.querySelector('button');
        // addToCartButton.addEventListener('click',)
        return prodEl;
    }
}

class ShopingCart{
    render(){
        const cartEl=document.createElement('section');
        cartEl.innerHTML=`
        <h2>\$${0}</h2>
        <button>Order now</button>`;
        cartEl.className='cart';
    }
}

class ProductList {
  products = [
    new Product(
      "Pillow",
      "https://www.sleepspa.in/product/sleep-spa-comfort-therapy-fibre-pillow/",
      "A soft pillow",
      19.99,
    ),
    new Product(
      "Carpet",
      "https://www.amazon.in/Home-Talk-Chenille-Multicolor-Polyester/dp/B01M16KY0T",
      "Heavy material carpet",
      89.99,
    )
  ];

  render(){
    const renderHook=document.getElementById('app');
    const prodList=document.createElement('ul');
    prodList.className='product-list';
    for(const prod of this.products){
        const productItem=new ProductItem(prod);
        const prodEl=productItem.render();
        prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

class Shop{
    
}

const showProduct=new ProductList();
showProduct.render();