import type { IQuery } from "../../../../commons/types/generated/types";
import type { ChangeEvent, MouseEvent } from "react";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  isOpenDeleteModal: boolean;
  onClickDelete: (event: MouseEvent<HTMLElement>) => void;
  onClickOpenDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
}


export interface IBoardCommentListUIItemProps {
  key: string;
  el: any;
  isOpenDeleteModal: boolean;
  onClickDelete: (event: MouseEvent<HTMLElement>) => void;
  onClickOpenDeleteModal: (event: MouseEvent<HTMLImageElement>) => void;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
}
