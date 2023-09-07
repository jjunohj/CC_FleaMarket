import type { ApolloQueryResult } from "@apollo/client";
import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";

export interface IPaginationProps {
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  totalPage: number;
}

export interface IPaginationUIProps {
  page: number;
  startPage: number;
  lastPage: number;
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
}

export interface IPageProps {
  isActive: boolean;
}
