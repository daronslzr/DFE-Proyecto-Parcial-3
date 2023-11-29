  export interface Product {
    id: number;
    name: string;
    price: number;
    totalSalesNumber: number;
    totalSalesPrice: number;
  }
  
  
  
  export const dummyProductList: Product[] = [
    {
      id: 1,
      name: 'Pokemon',
      price: 1500,
      totalSalesNumber: 15,
      totalSalesPrice: 22500,
    },
    {
        id: 2,
        name: 'Sonic',
        price: 1200,
        totalSalesNumber: 9,
        totalSalesPrice: 10800,
      }
  ];
  