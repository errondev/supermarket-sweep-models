import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

import { Price, PriceSchema } from './price.model';
import { Product } from './product.model';
import { Store } from './store.model';

@Schema({ timestamps: { createdAt: true, updatedAt: false } })
export class PriceHistory extends Document<mongoose.Types.ObjectId> {
  @Prop({ required: true, type: mongoose.Types.ObjectId, ref: 'Store' })
  store: Store;

  @Prop({ required: true, type: mongoose.Types.ObjectId, ref: 'Product' })
  product: Product;

  @Prop({ required: true, type: PriceSchema })
  price: Price;

  @Prop()
  createdAt: Date;
}

export const PriceHistorySchema = SchemaFactory.createForClass(PriceHistory);
PriceHistorySchema.index({ 'price.sweep': 1, product: 1 }, { unique: true });
