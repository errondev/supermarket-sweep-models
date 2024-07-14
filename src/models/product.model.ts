import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

import { Price, PriceSchema } from './price.model';

@Schema({ timestamps: true })
export class Product extends Document<mongoose.Types.ObjectId> {
  @Prop({ required: true })
  storeCode: string;

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

  @Prop([String])
  categoryCodes: string[];

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
