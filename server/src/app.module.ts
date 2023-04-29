import { Module } from "@nestjs/common";
import { ContactModule } from "./contact/contact.module";
import { MailerModule } from "@nestjs-modules/mailer";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    ContactModule,
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: "smtp.gmail.com",
          secure: true,
          auth: {
            user: configService.get<string>("MAIL_USERNAME"),
            pass: configService.get<string>("MAIL_PASSWORD"),
          },
        },
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      envFilePath: ".env",
    }),
  ],
  exports: [ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}