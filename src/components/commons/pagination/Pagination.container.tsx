import PaginationUI from "./Pagination.presenter";
import type { IPaginationProps } from "./Pagination.types";
import type { MouseEvent } from "react";
import { useState } from "react";

export default function Pagination(props: IPaginationProps) {
  const [startPage, setStartPage] = useState(1);
  const [page, setPage] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const totalPage =
    props.totalPage != null ? Math.ceil(props.totalPage / 10) : 50;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    void props.refetch({ page: Number(event.currentTarget.id) });
    setPage(Number(event.currentTarget.id));
  };

  const onClickPrevPage = () => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
    setPage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= totalPage) {
      setStartPage((prev) => prev + 10);
      setPage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
    }
  };

  return (
    <PaginationUI
      page={page}
      startPage={startPage}
      lastPage={totalPage}
      isActive={isActive}
      setIsActive={setIsActive}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      onClickPage={onClickPage}
    />
  );
}
