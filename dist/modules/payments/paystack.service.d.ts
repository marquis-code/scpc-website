import { ConfigService } from '@nestjs/config';
export declare class PaystackService {
    private configService;
    private paystack;
    constructor(configService: ConfigService);
    initiatePayment(payload: {
        email: string;
        amount: number;
        reference: string;
        callback_url: string;
        metadata?: any;
    }): Promise<any>;
    verifyTransaction(reference: string): Promise<any>;
}
