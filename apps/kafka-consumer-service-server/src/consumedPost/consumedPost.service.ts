import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConsumedPostServiceBase } from "./base/consumedPost.service.base";

@Injectable()
export class ConsumedPostService extends ConsumedPostServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
