/* Блок5_12
Код к упражнению:

Необходимо сделать корзину (Cart) на сайте,
которая имееет список продуктов (Product), добавленных в корзину
и параметры доставки (Delivery). Для Cart реализовать методы:
- Добавить продукт в корзину
- Удалить продукт из корзины по ID
- Посчитать стоимость товаров в корзине
- Задать доставку
- Checkout - вернуть что всё ок, если есть продукты и параметры доставки
Product: id, название и цена
Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)
*/

class Product {
    id: number;
    name: string;
    price: number;
  
    constructor(id: number, name: string, price: number) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  class Delivery {
    type: 'home' | 'pickup'; 
    date?: Date; 
    address?: string; 
    storeId?: number; 
  
    constructor(type: 'home' | 'pickup', date?: Date, address?: string, storeId?: number) {
      this.type = type;
      if (type === 'home') {
        if (!date || !address) {
          throw new Error('Для доставки до дома нужны дата и адрес');
        }
        this.date = date;
        this.address = address;
      } else if (type === 'pickup') {
        if (!storeId) {
          throw new Error('Для пункта выдачи нужен ID магазина');
        }
        this.storeId = storeId;
        this.date = new Date(); 
      }
    }
  
    toString(): string {
      if (this.type === 'home') {
        return `Доставка до дома: ${this.date?.toLocaleDateString()} в ${this.address}`;
      } else if (this.type === 'pickup') {
        return `Доставка до пункта выдачи: Магазин #${this.storeId}, Сегодня`;
      }
      return '';
    }
  }
  
  class Cart {
    products: Product[]; 
    delivery?: Delivery; 
  
    constructor() {
      this.products = [];
      this.delivery = undefined;
    }
  
    addProduct(product: Product): void {
      this.products.push(product);
      console.log(`Продукт "${product.name}" добавлен в корзину`);
    }
  
    removeProductById(productId: number): void {
      this.products = this.products.filter((product) => product.id !== productId);
      console.log(`Продукт с ID ${productId} удален из корзины`);
    }
  
    calculateTotalPrice(): number {
      return this.products.reduce((total, product) => total + product.price, 0);
    }
  
    setDelivery(delivery: Delivery): void {
      this.delivery = delivery;
      console.log(`Доставка установлена: ${delivery.toString()}`);
    }
  
    checkout(): string {
      if (this.products.length === 0) {
        return 'Ошибка: Корзина пуста';
      }
      if (!this.delivery) {
        return 'Ошибка: Не выбрана доставка';
      }
      return 'Всё ок! Ваш заказ принят';
    }
  }
  
  (async () => {
    const product1 = new Product(1, 'Яблоки', 100);
    const product2 = new Product(2, 'Груши', 150);
  
    const cart = new Cart();
  
    cart.addProduct(product1);
    cart.addProduct(product2);
  
    cart.setDelivery(new Delivery('home', new Date(), 'ул. Ленина, 1'));
  
    console.log(`Общая стоимость: ${cart.calculateTotalPrice()} рублей`);
  
    console.log(cart.checkout()); 
  
    cart.removeProductById(1);
  
    console.log(cart.checkout()); 
  
    cart.setDelivery(new Delivery('pickup', undefined, undefined, 5));
  
    console.log(cart.checkout()); 
  })();

