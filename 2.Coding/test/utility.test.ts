import { CartService } from '../cart';

describe('TEST Basic - Cart service that can manage items.', () => {
  // Create cart object
  const cart = new CartService(123);

  test('Should return true if id product is already in cart', () => {
    cart.add(1, 1);
    expect(cart.has(1)).toBe(true);
  });

  test('Should return false if id product is not found in cart', () => {
    cart.update(1, 0);
    expect(cart.has(1)).toBe(false);
  });

  test('Should return false if cart contains any items', () => {
    cart.add(1, 1);
    expect(cart.isEmpty()).toBe(false);
  });

  test('Should return true if cart is not contains any items', () => {
    cart.update(1, 0);
    expect(cart.isEmpty()).toBe(true);
  });

  test('Should show amount of products', () => {
    cart.add(1, 1);
    expect(cart.count()).toBe(1);
  });

  test('Should show total of quantity.', () => {
    expect(cart.quantity()).toBe(1);
  });

  test('Should amount of total items', () => {
    expect(cart.total()).toBe(10);
  });
});
