import { ConsumedPostWhereUniqueInput } from "../consumedPost/ConsumedPostWhereUniqueInput";

export type ConsumedCommentCreateInput = {
  consumedPost?: ConsumedPostWhereUniqueInput | null;
  content?: string | null;
};
