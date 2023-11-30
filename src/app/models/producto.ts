export interface Product {
    id: number;
    image: string;
    name: string;
    price: number;
    totalSalesNumber: number;
    totalSalesPrice: number;
}



export const dummyProductList: Product[] = [
     {
        id: 1,
        image: 'AnimalCrossing.jpg',
        name: 'Animal Crossing',
        price: 1500,
        totalSalesNumber: 15,
        totalSalesPrice: 22500,
    },
    {
        id: 2,
        image: 'SonicAdventure2.png',
        name: 'Sonic Adventure 2',
        price: 1200,
        totalSalesNumber: 9,
        totalSalesPrice: 10800,
    },
    {
        id: 3,
        image: 'ZeldaOcarina.jpg',
        name: 'Zelda Ocarina of Time',
        price: 3200,
        totalSalesNumber: 5,
        totalSalesPrice: 16000,
    },
    {
        id: 4,
        image: 'MarioParty.jpg',
        name: 'Mario Party',
        price: 1600,
        totalSalesNumber: 18,
        totalSalesPrice: 28800,
    }
];
