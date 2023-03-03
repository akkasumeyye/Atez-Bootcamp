import { IProduct } from "./IProduct";

export interface ITelevision extends IProduct {
    smartTv:boolean;
    stock: number;
}