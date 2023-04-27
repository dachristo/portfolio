import { BadRequestException, Body, Controller, Post } from "@nestjs/common";
import { ContactService } from "./contact.service";

@Controller("contact")
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  private validateEmail(email: string): boolean {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  }

  @Post()
  async sendEmail(@Body() body: any) {
    const { enterprise, email, message } = body;
    if (!this.validateEmail(email)) {
      throw new BadRequestException("Invalid email address");
    }
    await this.contactService.sendEmail({ enterprise, email, message });
    return { message: "Email sent successfully" };
  }
}
