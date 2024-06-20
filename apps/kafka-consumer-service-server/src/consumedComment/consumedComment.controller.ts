import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConsumedCommentService } from "./consumedComment.service";
import { ConsumedCommentControllerBase } from "./base/consumedComment.controller.base";

@swagger.ApiTags("consumedComments")
@common.Controller("consumedComments")
export class ConsumedCommentController extends ConsumedCommentControllerBase {
  constructor(protected readonly service: ConsumedCommentService) {
    super(service);
  }
}
