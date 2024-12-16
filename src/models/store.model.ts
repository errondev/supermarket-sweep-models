import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({ timestamps: true, id: false, _id: false })
export class Store extends Document<mongoose.Types.ObjectId> {
  @Prop({
    type: mongoose.Types.ObjectId,
    ref: 'Sweep',
  })
  sweepId?: mongoose.Types.ObjectId;

  @Prop({ required: true, unique: true, index: true })
  code: string;

  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true, unique: true })
  prefix: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
