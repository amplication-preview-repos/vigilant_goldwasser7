import { SortOrder } from "../../util/SortOrder";

export type ConsumedCommentOrderByInput = {
  consumedPostId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
