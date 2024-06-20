import { ConsumedComment as TConsumedComment } from "../api/consumedComment/ConsumedComment";

export const CONSUMEDCOMMENT_TITLE_FIELD = "id";

export const ConsumedCommentTitle = (record: TConsumedComment): string => {
  return record.id?.toString() || String(record.id);
};
