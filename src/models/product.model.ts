import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

import { Category } from './category.model';
import { Price, PriceSchema } from './price.model';
import { Store } from './store.model';

@Schema()
export class Product extends Document {
  @Prop({ required: true, type: mongoose.Types.ObjectId, ref: 'Store' })
  store: Store;

  @Prop({ required: true, unique: true, index: true })
  code: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  brand: string;

  @Prop()
  packageSize?: string;

  @Prop([String])
  imageUrls: string[];

  @Prop()
  productUrl?: string;

  @Prop([{ type: mongoose.Types.ObjectId, ref: 'Category' }])
  categories: Category[];

  @Prop({ required: true, default: false })
  isRestricted: boolean;

  @Prop({ required: true, default: true })
  isAvailable: boolean;

  @Prop({ required: false, type: PriceSchema })
  price?: Price;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
