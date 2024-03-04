interface ICart {
  customer_id: string;
  products: any;
}

interface IProduct {
  product_id: number;
  quantity: number;
  price?: number;
  total?: number;
}

interface IDiscount {
  type: string;
  amount: number;
  max?: number;
  name?: string;
}

interface IReward {
  type: string;
  name?: string;
  product_id?: number;
}

type IDiscountType = 'fixed' | 'percentage';

export { ICart, IProduct, IDiscount, IDiscountType, IReward };
