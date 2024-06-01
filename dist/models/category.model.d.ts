import mongoose, { Document } from 'mongoose';
export declare class StoreMappings extends Document {
    woolworths?: string[];
    coles?: string[];
    chemistWarehouse?: string[];
}
export declare const StoreMappingsSchema: mongoose.Schema<StoreMappings, mongoose.Model<StoreMappings, any, any, any, mongoose.Document<unknown, any, StoreMappings> & StoreMappings & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, StoreMappings, mongoose.Document<unknown, {}, mongoose.FlatRecord<StoreMappings>> & mongoose.FlatRecord<StoreMappings> & Required<{
    _id: unknown;
}>>;
export declare class Category extends Document<mongoose.Types.ObjectId> {
    parent?: Category;
    code: string;
    name: string;
    index: number;
    cron?: string;
    mappings: StoreMappings;
    isRestricted: boolean;
    isAvailable: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const CategorySchema: mongoose.Schema<Category, mongoose.Model<Category, any, any, any, mongoose.Document<unknown, any, Category> & Category & Required<{
    _id: mongoose.Types.ObjectId;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Category, mongoose.Document<unknown, {}, mongoose.FlatRecord<Category>> & mongoose.FlatRecord<Category> & Required<{
    _id: mongoose.Types.ObjectId;
}>>;
