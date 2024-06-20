import { ConsumedPostWhereUniqueInput } from "../consumedPost/ConsumedPostWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ConsumedCommentWhereInput = {
  consumedPost?: ConsumedPostWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
};
