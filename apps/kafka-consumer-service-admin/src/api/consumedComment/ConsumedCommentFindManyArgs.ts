import { ConsumedCommentWhereInput } from "./ConsumedCommentWhereInput";
import { ConsumedCommentOrderByInput } from "./ConsumedCommentOrderByInput";

export type ConsumedCommentFindManyArgs = {
  where?: ConsumedCommentWhereInput;
  orderBy?: Array<ConsumedCommentOrderByInput>;
  skip?: number;
  take?: number;
};
