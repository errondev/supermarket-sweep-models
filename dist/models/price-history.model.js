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
exports.PriceHistorySchema = exports.PriceHistory = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const price_model_1 = require("./price.model");
let PriceHistory = exports.PriceHistory = class PriceHistory extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], PriceHistory.prototype, "storeCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], PriceHistory.prototype, "productCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: price_model_1.PriceSchema }),
    __metadata("design:type", price_model_1.Price)
], PriceHistory.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], PriceHistory.prototype, "createdAt", void 0);
exports.PriceHistory = PriceHistory = __decorate([
    (0, mongoose_1.Schema)({ timestamps: { createdAt: true, updatedAt: false } })
], PriceHistory);
exports.PriceHistorySchema = mongoose_1.SchemaFactory.createForClass(PriceHistory);
exports.PriceHistorySchema.index({ 'price.sweepId': 1, productCode: 1 }, { unique: true });
//# sourceMappingURL=price-history.model.js.map