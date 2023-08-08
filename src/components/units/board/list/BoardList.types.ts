import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMoveToBoardNew: () => void;
}
