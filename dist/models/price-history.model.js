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
const product_model_1 = require("./product.model");
const store_model_1 = require("./store.model");
let PriceHistory = class PriceHistory extends mongoose_2.Document {
};
exports.PriceHistory = PriceHistory;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.default.Types.ObjectId, ref: 'Store' }),
    __metadata("design:type", store_model_1.Store)
], PriceHistory.prototype, "store", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.default.Types.ObjectId, ref: 'Product' }),
    __metadata("design:type", product_model_1.Product)
], PriceHistory.prototype, "product", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: price_model_1.PriceSchema }),
    __metadata("design:type", price_model_1.Price)
], PriceHistory.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], PriceHistory.prototype, "createdAt", void 0);
exports.PriceHistory = PriceHistory = __decorate([
    (0, mongoose_1.Schema)({ timestamps: { createdAt: true, updatedAt: false }, id: true })
], PriceHistory);
exports.PriceHistorySchema = mongoose_1.SchemaFactory.createForClass(PriceHistory);
exports.PriceHistorySchema.index({ 'price.sweep': 1, product: 1 }, { unique: true });
//# sourceMappingURL=price-history.model.js.map