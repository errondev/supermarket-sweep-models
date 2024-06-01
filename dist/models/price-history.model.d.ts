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
import { Price } from './price.model';
import { Product } from './product.model';
import { Store } from './store.model';
export declare class PriceHistory extends Document {
    store: Store;
    product: Product;
    price: Price;
    createdAt: Date;
}
export declare const PriceHistorySchema: mongoose.Schema<PriceHistory, mongoose.Model<PriceHistory, any, any, any, mongoose.Document<unknown, any, PriceHistory> & PriceHistory & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, PriceHistory, mongoose.Document<unknown, {}, mongoose.FlatRecord<PriceHistory>> & mongoose.FlatRecord<PriceHistory> & Required<{
    _id: unknown;
}>>;
