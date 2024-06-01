import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

import { Store } from './store.model';

@Schema({ timestamps: true })
export class Sweep extends Document<mongoose.Types.ObjectId> {
  @Prop({ required: true, type: mongoose.Types.ObjectId, ref: 'Store' })
  store: Store;

  @Prop({ required: true })
  startedAt: Date;

  @Prop()
  finishedAt?: Date;

  @Prop()
  dealsEndedAt?: Date;

  @Prop()
  productCount?: number;

  @Prop()
  isSuccess?: boolean;

  @Prop()
  errorMessage?: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const SweepSchema = SchemaFactory.createForClass(Sweep);
