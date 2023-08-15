import type { ChangeEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";
import type { Address } from "react-daum-postcode";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  images?: string[];
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  
}

export interface IBoardWriteUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  zipcode: string;
  address: string;
  addressDetail: string;
  isEdit: boolean;
  isActive: boolean;
  isModalOpen: boolean;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => Promise<void>;
  onClickUpdate: () => Promise<void>;
  onToggleModal: () => void;
  handleAddressModalComplete: (data: Address) => void;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
