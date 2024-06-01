/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import mongoose, { Document } from 'mongoose';
import { BestLocation } from '../types';
import { Sweep } from './sweep.model';
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
    sweep: Sweep;
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
