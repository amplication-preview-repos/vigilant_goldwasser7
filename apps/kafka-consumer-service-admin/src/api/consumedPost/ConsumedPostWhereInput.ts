import { ConsumedCommentListRelationFilter } from "../consumedComment/ConsumedCommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ConsumedPostWhereInput = {
  consumedComments?: ConsumedCommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  publishedDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
