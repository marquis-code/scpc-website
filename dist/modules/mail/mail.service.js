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
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const resend_1 = require("resend");
let MailService = class MailService {
    configService;
    resend;
    constructor(configService) {
        this.configService = configService;
        this.resend = new resend_1.Resend(this.configService.get('RESEND_API_KEY') || 'mock_key');
    }
    async sendMail(to, subject, html) {
        try {
            const { data, error } = await this.resend.emails.send({
                from: 'SCPSN <notifications@scpsn.org.ng>',
                to,
                subject,
                html,
            });
            if (error) {
                console.error('Mail Error:', error);
                return { success: false, error };
            }
            return { success: true, data };
        }
        catch (err) {
            console.error('Mail Exception:', err);
            return { success: false, error: err };
        }
    }
    async sendAppointmentConfirmation(email, appointmentDetails) {
        const html = `
      <h1>Appointment Confirmed</h1>
      <p>Hello ${appointmentDetails.fullName},</p>
      <p>Your appointment for <strong>${appointmentDetails.purpose}</strong> has been scheduled for <strong>${appointmentDetails.date}</strong> at <strong>${appointmentDetails.time}</strong>.</p>
      <p>Thank you for contacting SCPSN.</p>
    `;
        return this.sendMail(email, 'SCPSN - Appointment Confirmation', html);
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], MailService);
//# sourceMappingURL=mail.service.js.map