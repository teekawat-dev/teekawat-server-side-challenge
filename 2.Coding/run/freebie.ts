import { CartService } from '../cart';
import { tableResult } from '../results';

export function FreebieRun() {
  console.log('');
  console.warn('\x1b[36m', 'Freebie - "Buy A get B for free!', '\x1b[0m', '\n');
  const cart = new CartService(1);

  console.log('Add item');
  console.log('cart.add(1, 2);');
  cart.add(1, 2);
  tableResult(cart.getProducts);

  const condition = { type: 'contains', product_id: 1 };
  const reward = { product_id: 2, quantity: 1 };

  console.log('Add condition reward');
  console.log(`cart.addFreebie('Freebie', condition, reward);`);
  cart.addFreebie('Freebie', condition, reward);
  tableResult(cart.getProducts);

  console.log('Check product by');
  console.log(`cart.has(2);`);
  cart.has(2); // true

  console.log('Count item in cart');
  console.log(`cart.count();`);
  cart.count(); // 2
}
