import { Module } from "@nestjs/common";
import { ContactController } from "./contact.controller";
import { ContactService } from "./contact.service";
import { ConfigService } from "@nestjs/config";

@Module({
  controllers: [ContactController],
  providers: [ContactService, ConfigService],
})
export class ContactModule {}
