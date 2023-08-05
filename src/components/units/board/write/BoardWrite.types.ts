import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IUpdateVariables {
  boardId: string | string[] | undefined;
  password?: string;
  updateBoardInput: {
    title?: string;
    contents?: string;
  };
}

export interface IBoardWriteUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  isEdit: boolean;
  isActive: boolean;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
