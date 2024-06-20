import { ConsumedPostWhereInput } from "./ConsumedPostWhereInput";
import { ConsumedPostOrderByInput } from "./ConsumedPostOrderByInput";

export type ConsumedPostFindManyArgs = {
  where?: ConsumedPostWhereInput;
  orderBy?: Array<ConsumedPostOrderByInput>;
  skip?: number;
  take?: number;
};
