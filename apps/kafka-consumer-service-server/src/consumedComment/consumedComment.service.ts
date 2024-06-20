import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConsumedCommentServiceBase } from "./base/consumedComment.service.base";

@Injectable()
export class ConsumedCommentService extends ConsumedCommentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
