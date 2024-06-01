import mongoose, { Document } from 'mongoose';
import { Category } from './category.model';
import { Price } from './price.model';
import { Store } from './store.model';
export declare class Product extends Document<mongoose.Types.ObjectId> {
    store: Store;
    code: string;
    name: string;
    brand: string;
    packageSize?: string;
    imageUrls: string[];
    productUrl?: string;
    categories: Category[];
    isRestricted: boolean;
    isAvailable: boolean;
    price?: Price;
    createdAt: Date;
    updatedAt: Date;
}
export declare const ProductSchema: mongoose.Schema<Product, mongoose.Model<Product, any, any, any, mongoose.Document<unknown, any, Product> & Product & Required<{
    _id: mongoose.Types.ObjectId;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Product, mongoose.Document<unknown, {}, mongoose.FlatRecord<Product>> & mongoose.FlatRecord<Product> & Required<{
    _id: mongoose.Types.ObjectId;
}>>;
