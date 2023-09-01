import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";
import { useState, type MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const [startPage, setStartPage] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [page, setPage] = useState(1);

  const END_PAGE = 77;

  const onClickPrevPage = () => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
    setPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= END_PAGE) {
      setStartPage((prev) => prev + 10);
      setPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void refetch({ page: Number(event.currentTarget.id) });
    setPage(Number(event.currentTarget.id));
  };

  return (
    <>
      <BoardListUI
        data={data}
        page={page}
        startPage={startPage}
        endPage={END_PAGE}
        isActive={isActive}
        setIsActive={setIsActive}
        onClickPrevPage={onClickPrevPage}
        onClickNextPage={onClickNextPage}
        onClickMoveToBoardDetail={onClickMoveToBoardDetail}
        onClickMoveToBoardNew={onClickMoveToBoardNew}
        onClickPage={onClickPage}
      />
    </>
  );
}
