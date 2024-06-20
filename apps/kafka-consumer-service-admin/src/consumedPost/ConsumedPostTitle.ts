import { ConsumedPost as TConsumedPost } from "../api/consumedPost/ConsumedPost";

export const CONSUMEDPOST_TITLE_FIELD = "title";

export const ConsumedPostTitle = (record: TConsumedPost): string => {
  return record.title?.toString() || String(record.id);
};
