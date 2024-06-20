import { SortOrder } from "../../util/SortOrder";

export type ConsumedPostOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  publishedDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
