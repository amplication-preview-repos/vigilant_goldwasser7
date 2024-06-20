import * as graphql from "@nestjs/graphql";
import { ConsumedCommentResolverBase } from "./base/consumedComment.resolver.base";
import { ConsumedComment } from "./base/ConsumedComment";
import { ConsumedCommentService } from "./consumedComment.service";

@graphql.Resolver(() => ConsumedComment)
export class ConsumedCommentResolver extends ConsumedCommentResolverBase {
  constructor(protected readonly service: ConsumedCommentService) {
    super(service);
  }
}
