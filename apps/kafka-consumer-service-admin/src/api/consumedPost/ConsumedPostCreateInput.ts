import { ConsumedCommentCreateNestedManyWithoutConsumedPostsInput } from "./ConsumedCommentCreateNestedManyWithoutConsumedPostsInput";

export type ConsumedPostCreateInput = {
  consumedComments?: ConsumedCommentCreateNestedManyWithoutConsumedPostsInput;
  content?: string | null;
  publishedDate?: Date | null;
  title?: string | null;
};
