import { CartService } from '../cart';
import { tableResult } from '../results';

export function basicRun() {
  // Basic - Cart service that can manage items.
  console.log('');
  console.warn(
    '\x1b[36m',
    'Basic - Cart service that can manage items.',
    '\x1b[0m',
    '\n'
  );
  let cart = new CartService(1);
  console.log('Add item quantity in cart by product id.', '\n');
  console.log('cart.add(1, 2);');
  cart.add(1, 2);
  tableResult( cart.getProducts);

  console.log('increase item quantity in cart by product id.', '\n');
  console.log('cart.add(1, 2);');
  cart.add(1, 2);
  tableResult( cart.getProducts);

  console.log(
    'Replace item quantity or remove item from cart by product id.',
    '\n'
  );
  console.log('cart.update(1, 55);');
  cart.update(1, 55);
  tableResult( cart.getProducts);

  console.log('Check if quantity = 0', '\n');
  console.log('cart.update(1, 55);');
  cart.update(1, 0);
  tableResult( cart.getProducts);

  console.log('Check if  product id not found', '\n');
  console.log('cart.update(2, 55);');
  cart.update(2, 55);
  tableResult( cart.getProducts);
  console.log('\n');

  console.log('Check if remove item by id', '\n');
  console.log('cart.remove(1);');
  console.log('cart.remove(2);');

  cart.remove(1);
  cart.remove(2);
  tableResult( cart.getProducts);

  console.log('Check if cart contains any items, boolean returned.');
  cart.destroy();
}
