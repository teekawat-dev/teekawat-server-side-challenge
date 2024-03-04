import { CartService } from '../cart';
import { logResult } from '../results';

export function UtilityRun() {
  // Utilities - Functions that save consumers effort.
  console.log('');
  console.warn(
    '\x1b[36m',
    'Utilities - Functions that save consumers effort.',
    '\x1b[0m'
  );

  const cart = new CartService(1);
  cart.add(1, 2);
  cart.add(1, 2);
  cart.add(2, 2);

  console.log('Check id product is already in cart, boolean returned.');
  cart.has(1);
  logResult(cart.has(1));

  console.log('Check if cart contains any items, boolean returned.');
  cart.isEmpty();
  logResult(cart.isEmpty());

  console.log('Display list of items and quantity, json returned.');
  cart.count();
  logResult(cart.count());

  console.log('Get number of different items, int returned.');
  cart.quantity();
  logResult(cart.quantity());

  console.log('Get amount of total items, int returned.');
  cart.total();
  logResult(cart.total());
}
