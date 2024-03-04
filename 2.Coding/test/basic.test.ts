import { CartService } from '../cart';

describe('TEST Basic - Cart service that can manage items.', () => {
  // Create cart object
  const cart = new CartService(123);

  // Add or increase item quantity in cart by product id.
  test('Should Add  item quantity in cart by product id.', () => {
    cart.add(1, 1);
    expect(cart.has(1)).toBe(true);
  });

  test('Should increase item quantity in cart by product id.', () => {
    cart.add(1, 1);
    expect(cart.getProducts[0].quantity).toBe(2);
  });

  test('Should Replace item quantity or remove item from cart by product id.', () => {
    cart.update(1, 1);
    expect(cart.getProducts[0].quantity).toBe(1);
  });

  test('Should remove item when the quantity = 0', () => {
    cart.update(1, 0);
    expect(cart.has(1)).toBe(false);
  });

  test('Should Delete item from cart by product id.', () => {
    cart.add(1, 1);
    cart.remove(1);
    expect(cart.has(1)).toBe(false);
  });

  test('Should Delete cart object.', () => {
    cart.destroy();
    expect(cart.getCustomerId).toBe(null);
  });
});
