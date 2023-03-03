export interface IProduct{
    title: string;
    description: string,
    price: number;
    rating: number;
    id: number | string;
    thumbnail: string
    category: string
}


export interface ISmartPhone extends IProduct{
    color: string;
}

export interface ILaptop extends IProduct{
    discountPercentage: number,
    screenDimentions: number,
}

export interface ITablet extends ISmartPhone {
    cellular: boolean;
    wifi: boolean;
}

export interface ITelevision extends IProduct {
    smartTv:boolean;
    stock: number;
}


export interface IProductApi <T>{
    findAll: () => T[];
    findByCategory:(category: string) => T[];
    findByText: (input: string) => T[];
    //En ucuz ürünü seç
    findCheapestProduct: () => T[];
    //Stok 20 den az olan ürünleri getir
    findStockCountMax20: () => T[] | undefined;
    //marka ismiyle arama yap
    searchByBrandName: (brand: string) => T[] | undefined;
       
    }
    
