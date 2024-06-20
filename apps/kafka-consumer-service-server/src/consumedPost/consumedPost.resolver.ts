import * as graphql from "@nestjs/graphql";
import { ConsumedPostResolverBase } from "./base/consumedPost.resolver.base";
import { ConsumedPost } from "./base/ConsumedPost";
import { ConsumedPostService } from "./consumedPost.service";

@graphql.Resolver(() => ConsumedPost)
export class ConsumedPostResolver extends ConsumedPostResolverBase {
  constructor(protected readonly service: ConsumedPostService) {
    super(service);
  }
}
