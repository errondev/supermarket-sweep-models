import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

import { DayOfWeek } from '../enums';

import { Sweep } from './sweep.model';

@Schema({ timestamps: true })
export class Store extends Document {
  @Prop({
    type: mongoose.Types.ObjectId,
    ref: 'Sweep',
  })
  sweep?: Sweep;

  @Prop({ required: true, unique: true, index: true })
  code: string;

  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true, unique: true })
  prefix: string;

  @Prop({ required: true, default: true })
  isAvailable: boolean;

  @Prop()
  specialUpdateDay?: DayOfWeek;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
