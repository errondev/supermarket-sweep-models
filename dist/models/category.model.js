"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySchema = exports.Category = exports.StoreMappingsSchema = exports.StoreMappings = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let StoreMappings = exports.StoreMappings = class StoreMappings extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], StoreMappings.prototype, "woolworths", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], StoreMappings.prototype, "coles", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], StoreMappings.prototype, "chemistWarehouse", void 0);
exports.StoreMappings = StoreMappings = __decorate([
    (0, mongoose_1.Schema)({ timestamps: false, id: false, _id: false })
], StoreMappings);
exports.StoreMappingsSchema = mongoose_1.SchemaFactory.createForClass(StoreMappings);
let Category = exports.Category = class Category extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
        type: mongoose_2.default.Types.ObjectId,
        ref: 'Category',
    }),
    __metadata("design:type", Category)
], Category.prototype, "parent", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, index: true }),
    __metadata("design:type", String)
], Category.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Category.prototype, "index", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Category.prototype, "cron", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: exports.StoreMappingsSchema }),
    __metadata("design:type", StoreMappings)
], Category.prototype, "mappings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], Category.prototype, "isRestricted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: true }),
    __metadata("design:type", Boolean)
], Category.prototype, "isAvailable", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Category.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Category.prototype, "updatedAt", void 0);
exports.Category = Category = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Category);
exports.CategorySchema = mongoose_1.SchemaFactory.createForClass(Category);
//# sourceMappingURL=category.model.js.map