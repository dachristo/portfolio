import { Module } from "@nestjs/common";
import { ContactModule } from "./contact/contact.module";
import { MailerModule } from "@nestjs-modules/mailer";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ContactModule,
    MailerModule.forRoot({
      transport: {
        host: "smtp.gmail.com",
        secure: true,
        auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
        },
      },
      defaults: {
        from: process.env.MAIL_FROM,
      },
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
