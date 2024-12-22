import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

import { BestLocation } from '../types.ts';

@Schema({ timestamps: false, id: false, _id: false })
export class Price extends Document {
  @Prop({
    required: true,
    type: mongoose.Types.ObjectId,
    ref: 'Sweep',
  })
  sweepId: mongoose.Types.ObjectId;

  @Prop()
  price: number;

  @Prop()
  wasPrice?: number;

  @Prop()
  cupPrice?: string;

  @Prop()
  multibuyUnitPrice?: number;

  @Prop()
  multibuyQuantity?: number;

  @Prop()
  multibuyCupPrice?: string;

  @Prop()
  discountRate?: number;

  @Prop({ required: true, default: 'none' })
  bestLocation: BestLocation;

  @Prop({ required: true })
  isAvailable: boolean;

  @Prop({ required: true })
  isInstoreOnly: boolean;

  @Prop({ required: true })
  isOnlineOnly: boolean;

  @Prop({ required: true })
  isMultibuy: boolean;

  @Prop({ required: true })
  isHalfPrice: boolean;

  @Prop({ required: true })
  isSpecial: boolean;
}

export const PriceSchema = SchemaFactory.createForClass(Price);
