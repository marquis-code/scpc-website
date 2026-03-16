import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';

@Injectable()
export class MailService {
  private resend: Resend;

  constructor(private configService: ConfigService) {
    this.resend = new Resend(this.configService.get<string>('RESEND_API_KEY') || 'mock_key');
  }

  async sendMail(to: string, subject: string, html: string) {
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
    } catch (err) {
      console.error('Mail Exception:', err);
      return { success: false, error: err };
    }
  }

  async sendAppointmentConfirmation(email: string, appointmentDetails: any) {
    const html = `
      <h1>Appointment Confirmed</h1>
      <p>Hello ${appointmentDetails.fullName},</p>
      <p>Your appointment for <strong>${appointmentDetails.purpose}</strong> has been scheduled for <strong>${appointmentDetails.date}</strong> at <strong>${appointmentDetails.time}</strong>.</p>
      <p>Thank you for contacting SCPSN.</p>
    `;
    return this.sendMail(email, 'SCPSN - Appointment Confirmation', html);
  }
}
