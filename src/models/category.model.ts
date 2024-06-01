import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

class StoreMappings {
  @Prop()
  woolworths?: string[];

  @Prop()
  coles?: string[];

  @Prop()
  chemistWarehouse?: string[];
}

@Schema({ timestamps: true })
export class Category extends Document {
  @Prop({
    required: false,
    type: mongoose.Types.ObjectId,
    ref: 'Category',
  })
  parent?: Category;

  @Prop({ required: true, unique: true, index: true })
  code: string;

  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  index: number;

  @Prop()
  cron?: string;

  @Prop({ required: true, type: StoreMappings })
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
