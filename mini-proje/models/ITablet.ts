import { IProduct } from "./IProduct";
import { ISmartPhone } from "./ISmartPhone";

export interface ITablet extends ISmartPhone {
    cellular: boolean;
    wifi: boolean;
}
