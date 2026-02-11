class Product {
  //   title;
  //   imageUrl;
  //   price;
  //   description;

  constructor(title, img, desc, price) {
    this.title = title;
    this.imageUrl = img;
    this.description = desc;
    this.price = price;
  }
}

class ElementAttribute {
  constructor(attributeName, attributeValue) {
    this.name = attributeName;
    this.value = attributeValue;
  }
}

class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
    this.render();
  }

  render(){};

  createRootElements(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce((prevValue, currValue) => {
      return prevValue + currValue.price;
    }, 0);
    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = this.createRootElements("section", "cart");
    cartEl.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now</button>
        `;
    this.totalOutput = cartEl.querySelector("h2");
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId);
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElements("li", "product-item");
    prodEl.innerHTML = `<div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}">
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to cart</button>
                </div>
            </div>`;
    const addToCartButton = prodEl.querySelector("button");
    addToCartButton.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList extends Component {
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
    ),
  ];

  constructor(renderHookId){
    super(renderHookId);
  }

  render() {
    const prodList = this.createRootElements("ul", "product-list", [
      new ElementAttribute("id", "prod-list"),
    ]);
    for (const prod of this.products) {
      new ProductItem(prod, "prod-list");
    }
  }
}

class Shop extends Component{
  constructor(){
    super();
  }
  
  render() {
    this.cart = new ShoppingCart("app");
    new ProductList('app');
  }
}

class App {
  static cart;
  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
