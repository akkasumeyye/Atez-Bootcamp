import { IProduct } from "./IProduct";

export interface ILaptop extends IProduct{
    discountPercentage: number,
    screenDimentions: number,
}