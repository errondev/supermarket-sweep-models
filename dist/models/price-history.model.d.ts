import mongoose, { Document } from 'mongoose';
import { Price } from './price.model';
export declare class PriceHistory extends Document<mongoose.Types.ObjectId> {
    storeCode: string;
    productCode: string;
    price: Price;
    createdAt: Date;
}
export declare const PriceHistorySchema: mongoose.Schema<PriceHistory, mongoose.Model<PriceHistory, any, any, any, mongoose.Document<unknown, any, PriceHistory> & PriceHistory & Required<{
    _id: mongoose.Types.ObjectId;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, PriceHistory, mongoose.Document<unknown, {}, mongoose.FlatRecord<PriceHistory>> & mongoose.FlatRecord<PriceHistory> & Required<{
    _id: mongoose.Types.ObjectId;
}>>;
