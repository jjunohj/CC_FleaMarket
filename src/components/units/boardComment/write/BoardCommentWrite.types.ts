import type { ChangeEvent } from "react";

export interface IBoardCommentWriteUIProps {
  contents: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickWrite: () => void;
  onClickUpdate: () => void;
  isEdit?: boolean;
  el?: any;
}

export interface IBoardCommentWriteProps {
  isEdit?: boolean;
  setIsEdit?: (isEdit: boolean) => void;
  el?: any;
}

export interface IUpdateBoardCommentInput {
  contents?: string;
}

export interface IButtonProps {
  isEdit?: boolean;
}
