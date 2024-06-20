import { ConsumedPostWhereUniqueInput } from "../consumedPost/ConsumedPostWhereUniqueInput";

export type ConsumedCommentUpdateInput = {
  consumedPost?: ConsumedPostWhereUniqueInput | null;
  content?: string | null;
};
