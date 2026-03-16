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
exports.FlutterwaveService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const Flutterwave = require('flutterwave-node-v3');
let FlutterwaveService = class FlutterwaveService {
    configService;
    flw;
    constructor(configService) {
        this.configService = configService;
        this.flw = new Flutterwave(this.configService.get('FLW_PUBLIC_KEY'), this.configService.get('FLW_SECRET_KEY'));
    }
    async initiatePayment(payload) {
        try {
            const response = await this.flw.Paymentplan.create(payload);
            const res = await this.flw.HostedPayment.initialize(payload);
            return res;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Flutterwave payment initiation failed');
        }
    }
    async verifyTransaction(transactionId) {
        try {
            const response = await this.flw.Transaction.verify({ id: transactionId });
            return response;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Flutterwave transaction verification failed');
        }
    }
};
exports.FlutterwaveService = FlutterwaveService;
exports.FlutterwaveService = FlutterwaveService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], FlutterwaveService);
//# sourceMappingURL=flutterwave.service.js.map