import { ConfigService } from '@nestjs/config';
export declare class FlutterwaveService {
    private configService;
    private flw;
    constructor(configService: ConfigService);
    initiatePayment(payload: {
        tx_ref: string;
        amount: number;
        currency: string;
        redirect_url: string;
        customer: {
            email: string;
            phonenumber: string;
            name: string;
        };
        customizations: {
            title: string;
            description: string;
            logo: string;
        };
    }): Promise<any>;
    verifyTransaction(transactionId: string): Promise<any>;
}
