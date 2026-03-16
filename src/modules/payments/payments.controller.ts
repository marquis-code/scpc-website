import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
} from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  create(@Body() createPaymentDto: any) {
    return this.paymentsService.create(createPaymentDto);
  }

  @Post('initiate')
  initiate(@Body() paymentData: any) {
    return this.paymentsService.initiatePayment(paymentData);
  }

  @Get()
  findAll() {
    return this.paymentsService.findAll();
  }

  @Patch(':reference/status')
  updateStatus(
    @Param('reference') reference: string,
    @Body('status') status: string,
  ) {
    return this.paymentsService.updateStatus(reference, status);
  }
}
