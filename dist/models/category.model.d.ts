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
declare class StoreMappings {
    woolworths?: string[];
    coles?: string[];
    chemistWarehouse?: string[];
}
export declare class Category extends Document {
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
    _id: unknown;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Category, mongoose.Document<unknown, {}, mongoose.FlatRecord<Category>> & mongoose.FlatRecord<Category> & Required<{
    _id: unknown;
}>>;
export {};
