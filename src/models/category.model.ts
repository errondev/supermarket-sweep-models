import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({ timestamps: false, id: false, _id: false })
export class StoreMappings extends Document {
  @Prop()
  woolworths?: string[];

  @Prop()
  coles?: string[];

  @Prop()
  chemistWarehouse?: string[];
}

export const StoreMappingsSchema = SchemaFactory.createForClass(StoreMappings);

@Schema({ timestamps: true })
export class Category extends Document<mongoose.Types.ObjectId> {
  @Prop()
  parentCode?: string;

  @Prop({ required: true, unique: true, index: true })
  code: string;

  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  index: number;

  @Prop({ required: true, type: StoreMappingsSchema })
  mappings: StoreMappings;

  @Prop({ required: true, default: false })
  isRestricted: boolean;

  @Prop({ required: true, default: true })
  isAvailable: boolean;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
