import { CartService } from '../cart';
import { logResult } from '../results';

export function DiscountRun() {
  //Discount - Sometimes customer apply coupon or voucher.

  console.log('');
  console.warn(
    '\x1b[36m',
    'Discount - Sometimes customer apply coupon or voucher.',
    '\x1b[0m',
    '\n'
  );
  const cart = new CartService(1);
  cart.add(1, 250);

  const percenTageDiscount = { type: 'percentage', amount: 10, max: 100 };

  console.log('\n', '//Added 25 items');
  console.log('cart.add(1, 250)');
  console.log(' cart.total()');
  cart.total();

  console.log('\n', '// Adding discount percentage');
  console.log(`cart.addDiscount('10%', percenTageDiscount);`);
  cart.addDiscount('10%', percenTageDiscount);

  console.log('\n', '// Get amount after adding percentage discount');
  console.log('cart.total()');
  cart.total();
  logResult(cart.total());

  console.log('\n', '// Removing discount');
  console.log(`cart.removeDiscount('10%');`);
  cart.removeDiscount('10%');

  console.log('\n', '// Get amount after removing percentage discount');
  console.log('cart.total()');
  cart.total();
  logResult(cart.total());

  const fixedDiscount = { type: 'fixed', amount: 50 };
  console.log('\n', '// Adding  fixed discount');
  console.log(`cart.addDiscount('50', fixedDiscount);`);
  cart.addDiscount('50', fixedDiscount);

  console.log('\n', '// Get amount after adding discount');
  console.log('cart.total()');
  cart.total();
  logResult(cart.total());

  console.log('\n', '// Removing fixed discount');
  console.log(`cart.removeDiscount('50');`);
  cart.removeDiscount('50');

  console.log('\n', '// Get amount after removing fixed discount');
  console.log('cart.total()');
  cart.total();
  logResult(cart.total());
}
