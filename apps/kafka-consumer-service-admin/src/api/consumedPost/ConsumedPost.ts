import { ConsumedComment } from "../consumedComment/ConsumedComment";

export type ConsumedPost = {
  consumedComments?: Array<ConsumedComment>;
  content: string | null;
  createdAt: Date;
  id: string;
  publishedDate: Date | null;
  title: string | null;
  updatedAt: Date;
};
