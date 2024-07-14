import mongoose, { Document } from 'mongoose';
export declare class Sweep extends Document<mongoose.Types.ObjectId> {
    storeCode: string;
    startedAt: Date;
    finishedAt?: Date;
    dealsEndedAt?: Date;
    productCount?: number;
    isSuccess?: boolean;
    errorMessage?: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const SweepSchema: mongoose.Schema<Sweep, mongoose.Model<Sweep, any, any, any, mongoose.Document<unknown, any, Sweep> & Sweep & Required<{
    _id: mongoose.Types.ObjectId;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Sweep, mongoose.Document<unknown, {}, mongoose.FlatRecord<Sweep>> & mongoose.FlatRecord<Sweep> & Required<{
    _id: mongoose.Types.ObjectId;
}>>;
