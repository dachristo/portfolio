import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";
import { ConfigService } from "@nestjs/config";
import { ContactDTO } from "./dto/contact.dto";

@Injectable()
export class ContactService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  async sendEmail(contactDto: ContactDTO): Promise<boolean> {
    const from = contactDto.email;
    const subject = `New message from ${contactDto.email}`;
    const to = this.configService.get<string>("MAIL_TO");

    try {
      await this.mailerService.sendMail({
        to,
        from,
        subject,
        template: "contact",
        html: `Entreprise : ${contactDto.enterprise} <br /> ${contactDto.message}`,
        context: {
          name: contactDto.enterprise,
          email: contactDto.email,
          message: contactDto.message,
        },
      });
      return true;
    } catch (error) {
      throw new Error(`Unable to send email. Error: ${error}`);
    }
  }
}
