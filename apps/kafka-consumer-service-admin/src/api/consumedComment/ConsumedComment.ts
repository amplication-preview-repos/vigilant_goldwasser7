import { ConsumedPost } from "../consumedPost/ConsumedPost";

export type ConsumedComment = {
  consumedPost?: ConsumedPost | null;
  content: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
