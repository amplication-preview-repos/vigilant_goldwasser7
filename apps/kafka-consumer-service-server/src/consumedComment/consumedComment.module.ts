import { Module } from "@nestjs/common";
import { ConsumedCommentModuleBase } from "./base/consumedComment.module.base";
import { ConsumedCommentService } from "./consumedComment.service";
import { ConsumedCommentController } from "./consumedComment.controller";
import { ConsumedCommentResolver } from "./consumedComment.resolver";

@Module({
  imports: [ConsumedCommentModuleBase],
  controllers: [ConsumedCommentController],
  providers: [ConsumedCommentService, ConsumedCommentResolver],
  exports: [ConsumedCommentService],
})
export class ConsumedCommentModule {}
