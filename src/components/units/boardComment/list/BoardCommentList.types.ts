import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
}

export interface IBoardCommentListUIItemProps {
  key: string;
  el: any;
}
