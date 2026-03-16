import { ConfigService } from '@nestjs/config';
export declare class MailService {
    private configService;
    private resend;
    constructor(configService: ConfigService);
    sendMail(to: string, subject: string, html: string): Promise<{
        success: boolean;
        data: import("resend").CreateEmailResponseSuccess;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        data?: undefined;
    }>;
    sendAppointmentConfirmation(email: string, appointmentDetails: any): Promise<{
        success: boolean;
        data: import("resend").CreateEmailResponseSuccess;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        data?: undefined;
    }>;
}
