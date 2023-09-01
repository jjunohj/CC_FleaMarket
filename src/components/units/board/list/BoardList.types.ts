import type { MouseEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  page?: number;
  startPage: number;
  endPage: number;
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMoveToBoardNew: () => void;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
}

export interface IPageProps {
  isActive: boolean;
}
