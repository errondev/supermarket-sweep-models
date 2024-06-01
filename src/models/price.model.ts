import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

import { BestLocation } from '../types';

import { Sweep } from './sweep.model';

@Schema({ timestamps: false, id: false, _id: false })
export class LocationPrice extends Document {
  @Prop()
  bestPrice: number;

  @Prop()
  currentPrice?: number;

  @Prop()
  wasPrice?: number;

  @Prop()
  cupPrice?: string;

  @Prop()
  discountRate?: number;

  @Prop()
  multibuyUnitPrice?: number;

  @Prop()
  multibuyQuantity?: number;

  @Prop()
  multibuyCupPrice?: string;

  @Prop()
  multibuyDiscountRate?: number;
}

export const LocationPriceSchema = SchemaFactory.createForClass(LocationPrice);

@Schema({ timestamps: false, id: false, _id: false })
export class Price extends Document {
  @Prop({
    required: true,
    type: mongoose.Types.ObjectId,
    ref: 'Sweep',
  })
  sweep: Sweep;

  @Prop({ required: false, type: LocationPriceSchema })
  instore?: LocationPrice;

  @Prop({ required: false, type: LocationPriceSchema })
  online?: LocationPrice;

  @Prop()
  bestPrice: number;

  @Prop()
  bestDiscountRate: number;

  @Prop({ required: true, default: 'none' })
  bestLocation: BestLocation;

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

  @Prop({ required: true })
  isAvailableInstore: boolean;

  @Prop({ required: true })
  isAvailableOnline: boolean;
}

export const PriceSchema = SchemaFactory.createForClass(Price);
