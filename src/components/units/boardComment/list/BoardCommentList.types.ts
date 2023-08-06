import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  data?: any;
  onClickDelete: (event: React.MouseEvent<HTMLImageElement>) => void;
}

export interface IBoardFetchBoardCommentsProps {
  data?: Pick<IQuery, "fetchBoardComments"> | undefined;
  writer: string;
  contents: string;
  createdAt: string;
  rating: number;
  _id: string;
}
