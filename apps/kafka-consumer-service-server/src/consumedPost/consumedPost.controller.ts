import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConsumedPostService } from "./consumedPost.service";
import { ConsumedPostControllerBase } from "./base/consumedPost.controller.base";

@swagger.ApiTags("consumedPosts")
@common.Controller("consumedPosts")
export class ConsumedPostController extends ConsumedPostControllerBase {
  constructor(protected readonly service: ConsumedPostService) {
    super(service);
  }
}
