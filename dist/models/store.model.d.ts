import mongoose, { Document } from 'mongoose';
import { DayOfWeek } from '../enums';
import { Sweep } from './sweep.model';
export declare class Store extends Document<mongoose.Types.ObjectId> {
    sweep?: Sweep;
    code: string;
    name: string;
    prefix: string;
    isAvailable: boolean;
    specialUpdateDay?: DayOfWeek;
    createdAt: Date;
    updatedAt: Date;
}
export declare const StoreSchema: mongoose.Schema<Store, mongoose.Model<Store, any, any, any, mongoose.Document<unknown, any, Store> & Store & Required<{
    _id: mongoose.Types.ObjectId;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Store, mongoose.Document<unknown, {}, mongoose.FlatRecord<Store>> & mongoose.FlatRecord<Store> & Required<{
    _id: mongoose.Types.ObjectId;
}>>;
