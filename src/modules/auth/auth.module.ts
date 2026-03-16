import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { FirebaseStrategy } from './firebase.strategy';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'firebase-auth' })],
  providers: [AuthService, FirebaseStrategy],
  exports: [AuthService, PassportModule],
})
export class AuthModule {}
