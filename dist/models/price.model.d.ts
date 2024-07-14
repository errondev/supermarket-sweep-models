import mongoose, { Document } from 'mongoose';
import { BestLocation } from '../types';
export declare class LocationPrice extends Document {
    bestPrice: number;
    currentPrice?: number;
    wasPrice?: number;
    cupPrice?: string;
    discountRate?: number;
    multibuyUnitPrice?: number;
    multibuyQuantity?: number;
    multibuyCupPrice?: string;
    multibuyDiscountRate?: number;
}
export declare const LocationPriceSchema: mongoose.Schema<LocationPrice, mongoose.Model<LocationPrice, any, any, any, mongoose.Document<unknown, any, LocationPrice> & LocationPrice & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, LocationPrice, mongoose.Document<unknown, {}, mongoose.FlatRecord<LocationPrice>> & mongoose.FlatRecord<LocationPrice> & Required<{
    _id: unknown;
}>>;
export declare class Price extends Document {
    sweepId: mongoose.Types.ObjectId;
    instore?: LocationPrice;
    online?: LocationPrice;
    bestPrice: number;
    bestDiscountRate: number;
    bestLocation: BestLocation;
    isInstoreOnly: boolean;
    isOnlineOnly: boolean;
    isMultibuy: boolean;
    isHalfPrice: boolean;
    isSpecial: boolean;
    isAvailableInstore: boolean;
    isAvailableOnline: boolean;
}
export declare const PriceSchema: mongoose.Schema<Price, mongoose.Model<Price, any, any, any, mongoose.Document<unknown, any, Price> & Price & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Price, mongoose.Document<unknown, {}, mongoose.FlatRecord<Price>> & mongoose.FlatRecord<Price> & Required<{
    _id: unknown;
}>>;
