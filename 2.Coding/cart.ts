import { IDiscount, IProduct, IReward } from './interface';
import { tableResult } from './results';

export class CartService {
  private customer_id: number | null = null;
  private products: IProduct[] = [];
  private discounts: IDiscount[] = [];
  private promotions: any[] = [];

  constructor(customer_id: number) {
    this.customer_id = customer_id;
    this.products = [];
  }

  // Basic - Cart service that can manage items.
  add(product_id: number, quantity: number) {
    const product = this.products.find(
      (p: IProduct) => p.product_id === product_id
    );
    if (!product) {
      this.products.push({ product_id, quantity, price: 10 });
    } else {
      this.products.forEach((product: IProduct) => {
        if (product_id === product.product_id) {
          product.quantity += quantity;
          product.price = 10;
        }
      });
    }
  }

  update(product_id: number, quantity: number) {
    if (
      !this.products.some(
        (product: IProduct) => product.product_id == product_id
      )
    )
      return console.log(
        '\x1b[31m',
        ` Product id ${product_id} not found`,
        '\x1b[0m'
      );
    this.products.forEach((product: IProduct) => {
      if (product_id === product.product_id) {
        product.quantity = quantity;
      }
    });
    if (quantity == 0) {
      this.products = this.products.filter(
        (product: IProduct) => product.product_id !== product_id
      );
    }
  }

  remove(product_id: number) {
    if (
      !this.products.some(
        (product: IProduct) => product.product_id == product_id
      )
    ) {
      console.log('\x1b[31m', ` Product id ${product_id} not found`, '\x1b[0m');
      return ` Product id ${product_id} not found`;
    }
    this.products =
      this.products.filter(
        (product: IProduct) => product.product_id !== product_id
      ) || [];
  }

  destroy() {
    this.customer_id = null;
    this.products = [];
  }

  // Utilities - Functions that save consumers effort.
  has(product_id: number) {
    const result = this.products.some((o) => o.product_id === product_id);
    return result;
  }

  isEmpty() {
    const result = this.products.length === 0;
    return result;
  }

  count() {
    const result = this.products.length;
    return result;
  }

  quantity() {
    let result = this.products.reduce(
      (accumulator, product) => accumulator + product.quantity,
      0
    );
    return result;
  }

  total() {
    let result = this.products.reduce(
      (accumulator, product) =>
        accumulator + product.quantity * (product.price || 10),
      0
    );
    if (this.discounts.length) {
      this.discounts.forEach((discount) => {
        if (discount.type === 'fixed') {
          result -= discount.amount;
        } else {
          let totalDiscount = (result * 100) / discount.amount;
          if (discount.max && totalDiscount > discount.max) {
            totalDiscount = discount.max;
          }
          result -= totalDiscount;
        }
      });
    }
    return result;
  }

  //Discount - Sometimes customer apply coupon or voucher.
  addDiscount(name: string, discount: IDiscount) {
    this.discounts.push({ ...discount, name });
  }

  removeDiscount(name: string) {
    this.discounts = this.discounts.filter(
      (discount) => discount.name !== name
    );
  }

  addFreebie(name: string, condition: IReward, reward: IProduct): void {
    this.promotions.push({ name, condition, reward });
    if (condition.type === 'contains') {
      const hasProduct = this.products.find(
        (product) => condition.product_id === product.product_id
      );
      if (hasProduct) {
        reward.quantity = hasProduct.quantity;
        reward.price = hasProduct.price;
        this.products.push(reward);
      }
    }
  }

  get getProducts(): IProduct[] {
    return this.products;
  }
  get getCustomerId() {
    return this.customer_id;
  }
}
