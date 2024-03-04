import { IProduct } from './interface';

export function tableResult(products: IProduct[]) {
  console.log('Result:');
  console.table(
    products.map((product) => ({
      ...product,
      total: (product?.price || 10) * product.quantity,
    }))
  );
  console.log('', '\n');
}

export function logResult(results: any) {
  console.log('');
  console.log('\x1b[32m', `${results}`, '\x1b[0m');
  console.log('');
}
