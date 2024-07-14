import mongoose, { Document } from 'mongoose';
import { Price } from './price.model';
export declare class Product extends Document<mongoose.Types.ObjectId> {
    storeCode: string;
    code: string;
    name: string;
    brand: string;
    packageSize?: string;
    imageUrls: string[];
    productUrl?: string;
    categoryCodes: string[];
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
