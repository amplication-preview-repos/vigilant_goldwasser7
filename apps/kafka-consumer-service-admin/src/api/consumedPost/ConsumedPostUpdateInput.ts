import { ConsumedCommentUpdateManyWithoutConsumedPostsInput } from "./ConsumedCommentUpdateManyWithoutConsumedPostsInput";

export type ConsumedPostUpdateInput = {
  consumedComments?: ConsumedCommentUpdateManyWithoutConsumedPostsInput;
  content?: string | null;
  publishedDate?: Date | null;
  title?: string | null;
};
