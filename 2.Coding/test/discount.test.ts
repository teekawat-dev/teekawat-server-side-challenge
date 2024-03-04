import { CartService } from '../cart';

describe('TEST Discount - Sometimes customer apply coupon or voucher.', () => {
  // Create cart object
  const cart = new CartService(123);
  const percenTageDiscount = { type: 'percentage', amount: 10, max: 100 };
  const fixedDiscount = { type: 'fixed', amount: 50 };
  cart.add(1, 250);
  test('Should return amount of total = 2500', () => {
    cart.total();
    expect(cart.total()).toBe(2500);
  });

  test('Should display amount after adding percentage discount = 2400', () => {
    cart.addDiscount('10%', percenTageDiscount);
    cart.total();
    expect(cart.total()).toBe(2400);
  });

  test('Should display amount after removing percentage discounts = 2500', () => {
    cart.removeDiscount('10%');
    expect(cart.total()).toBe(2500);
  });

  test('Should display amount after added fixed discounts = 2450', () => {
    cart.addDiscount('50', fixedDiscount);
    expect(cart.total()).toBe(2450);
  });
  test('Should display amount after removing fixed discounts = 2500', () => {
    cart.removeDiscount('50');
    expect(cart.total()).toBe(2500);
  });
});
