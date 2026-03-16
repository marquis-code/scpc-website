import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
const Paystack = require('paystack-api');

@Injectable()
export class PaystackService {
  private paystack: any;

  constructor(private configService: ConfigService) {
    this.paystack = Paystack(this.configService.get<string>('PAYSTACK_SECRET_KEY'));
  }

  async initiatePayment(payload: {
    email: string;
    amount: number;
    reference: string;
    callback_url: string;
    metadata?: any;
  }) {
    try {
      // Paystack amount is in kobo (NGN * 100)
      const response = await this.paystack.transaction.initialize({
        ...payload,
        amount: payload.amount * 100,
      });
      return response;
    } catch (error) {
      console.error('Paystack Error:', error);
      throw new InternalServerErrorException('Paystack payment initiation failed');
    }
  }

  async verifyTransaction(reference: string) {
    try {
      const response = await this.paystack.transaction.verify({ reference });
      return response;
    } catch (error) {
      throw new InternalServerErrorException('Paystack transaction verification failed');
    }
  }
}
