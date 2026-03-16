import { PaymentsService } from './payments.service';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    create(createPaymentDto: any): Promise<import("./schemas/payment.schema").PaymentDocument>;
    initiate(paymentData: any): Promise<any>;
    findAll(): Promise<import("./schemas/payment.schema").PaymentDocument[]>;
    updateStatus(reference: string, status: string): Promise<import("./schemas/payment.schema").PaymentDocument>;
}
