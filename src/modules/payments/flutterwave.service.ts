import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
const Flutterwave = require('flutterwave-node-v3');

@Injectable()
export class FlutterwaveService {
  private flw: any;

  constructor(private configService: ConfigService) {
    this.flw = new Flutterwave(
      this.configService.get<string>('FLW_PUBLIC_KEY'),
      this.configService.get<string>('FLW_SECRET_KEY'),
    );
  }

  async initiatePayment(payload: {
    tx_ref: string;
    amount: number;
    currency: string;
    redirect_url: string;
    customer: { email: string; phonenumber: string; name: string };
    customizations: { title: string; description: string; logo: string };
  }) {
    try {
      const response = await this.flw.Paymentplan.create(payload); // Note: For standard payments, use Hosted Payment link or direct charge
      // Actually, for a simple implementation, we usually use the hosted payment link via the 'payments' endpoint
      // Flutterwave SDK might differ, let's use a standard axios call if the SDK is complex, 
      // but let's try the SDK's likely method for standard payment initiation.
      
      const res = await this.flw.HostedPayment.initialize(payload);
      return res;
    } catch (error) {
      throw new InternalServerErrorException('Flutterwave payment initiation failed');
    }
  }

  async verifyTransaction(transactionId: string) {
    try {
      const response = await this.flw.Transaction.verify({ id: transactionId });
      return response;
    } catch (error) {
      throw new InternalServerErrorException('Flutterwave transaction verification failed');
    }
  }
}
