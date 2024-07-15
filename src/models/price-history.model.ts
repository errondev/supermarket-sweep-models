import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

import { Price, PriceSchema } from './price.model';

@Schema({ timestamps: { createdAt: true, updatedAt: false } })
export class PriceHistory extends Document<mongoose.Types.ObjectId> {
  @Prop({ required: true })
  storeCode: string;

  @Prop({ required: true })
  productCode: string;

  @Prop({ required: true, type: PriceSchema })
  price: Price;

  @Prop()
  createdAt: Date;
}

export const PriceHistorySchema = SchemaFactory.createForClass(PriceHistory);
PriceHistorySchema.index(
  { 'price.sweepId': 1, productCode: 1 },
  { unique: true },
);
