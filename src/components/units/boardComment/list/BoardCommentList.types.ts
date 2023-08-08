import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments"> | undefined;
  onClickDelete: (event: React.MouseEvent<HTMLImageElement>) => void;
}

export interface IBoardCommentListUIItemProps {
  key: string;
  el: any;
}
