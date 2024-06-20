import { Module } from "@nestjs/common";
import { ConsumedPostModuleBase } from "./base/consumedPost.module.base";
import { ConsumedPostService } from "./consumedPost.service";
import { ConsumedPostController } from "./consumedPost.controller";
import { ConsumedPostResolver } from "./consumedPost.resolver";

@Module({
  imports: [ConsumedPostModuleBase],
  controllers: [ConsumedPostController],
  providers: [ConsumedPostService, ConsumedPostResolver],
  exports: [ConsumedPostService],
})
export class ConsumedPostModule {}
