import { CartService } from '../cart';

describe('TEST Freebie - "Buy A get B for free!', () => {
  // Create cart object
  const cart = new CartService(123);
  cart.add(1, 1);

  const condition = { type: 'contains', product_id: 1 };
  const reward = { product_id: 2, quantity: 1 };
  const newCondition = { type: 'contains', product_id: 10 };
  const newReward = { product_id: 2, quantity: 3 };
  // Add or increase item quantity in cart by product id.
  test('Should has product item id 2 after added promotion', () => {
    cart.addFreebie('1free1', condition, reward);
    expect(cart.has(2)).toBe(true);
  });

  test('Should not has product item id 3 after added new promotion', () => {
    cart.addFreebie('1free1', newCondition, newReward);
    expect(cart.has(3)).toBe(false);
  });
});
