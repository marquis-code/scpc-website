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
exports.PaystackService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const Paystack = require('paystack-api');
let PaystackService = class PaystackService {
    configService;
    paystack;
    constructor(configService) {
        this.configService = configService;
        this.paystack = Paystack(this.configService.get('PAYSTACK_SECRET_KEY'));
    }
    async initiatePayment(payload) {
        try {
            const response = await this.paystack.transaction.initialize({
                ...payload,
                amount: payload.amount * 100,
            });
            return response;
        }
        catch (error) {
            console.error('Paystack Error:', error);
            throw new common_1.InternalServerErrorException('Paystack payment initiation failed');
        }
    }
    async verifyTransaction(reference) {
        try {
            const response = await this.paystack.transaction.verify({ reference });
            return response;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Paystack transaction verification failed');
        }
    }
};
exports.PaystackService = PaystackService;
exports.PaystackService = PaystackService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], PaystackService);
//# sourceMappingURL=paystack.service.js.map