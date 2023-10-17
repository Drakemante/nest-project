// import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { UserModule } from 'src/user/user.module';
// import { PrismaModule } from 'src/prisma/prisma.module';
// import { UserService } from 'src/user/user.service';

// @Module({
//   imports:[PrismaModule],
//   providers: [AuthService, UserService]
// })
// export class AuthModule {}

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UserModule } from 'src/user/user.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, UserService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}