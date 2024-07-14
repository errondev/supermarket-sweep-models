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
exports.PriceSchema = exports.Price = exports.LocationPriceSchema = exports.LocationPrice = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let LocationPrice = exports.LocationPrice = class LocationPrice extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], LocationPrice.prototype, "bestPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], LocationPrice.prototype, "currentPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], LocationPrice.prototype, "wasPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], LocationPrice.prototype, "cupPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], LocationPrice.prototype, "discountRate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], LocationPrice.prototype, "multibuyUnitPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], LocationPrice.prototype, "multibuyQuantity", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], LocationPrice.prototype, "multibuyCupPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], LocationPrice.prototype, "multibuyDiscountRate", void 0);
exports.LocationPrice = LocationPrice = __decorate([
    (0, mongoose_1.Schema)({ timestamps: false, id: false, _id: false })
], LocationPrice);
exports.LocationPriceSchema = mongoose_1.SchemaFactory.createForClass(LocationPrice);
let Price = exports.Price = class Price extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: mongoose_2.default.Types.ObjectId,
        ref: 'Sweep',
    }),
    __metadata("design:type", mongoose_2.default.Types.ObjectId)
], Price.prototype, "sweepId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, type: exports.LocationPriceSchema }),
    __metadata("design:type", LocationPrice)
], Price.prototype, "instore", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, type: exports.LocationPriceSchema }),
    __metadata("design:type", LocationPrice)
], Price.prototype, "online", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Price.prototype, "bestPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Price.prototype, "bestDiscountRate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 'none' }),
    __metadata("design:type", String)
], Price.prototype, "bestLocation", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], Price.prototype, "isInstoreOnly", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], Price.prototype, "isOnlineOnly", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], Price.prototype, "isMultibuy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], Price.prototype, "isHalfPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], Price.prototype, "isSpecial", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], Price.prototype, "isAvailableInstore", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], Price.prototype, "isAvailableOnline", void 0);
exports.Price = Price = __decorate([
    (0, mongoose_1.Schema)({ timestamps: false, id: false, _id: false })
], Price);
exports.PriceSchema = mongoose_1.SchemaFactory.createForClass(Price);
//# sourceMappingURL=price.model.js.map