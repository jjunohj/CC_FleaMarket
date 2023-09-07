import * as S from "./Pagination.styles";
import type { IPaginationUIProps } from "./Pagination.types";

export default function PaginationUI(props: IPaginationUIProps) {
  return (
    <S.PageWrapper>
      <S.PrevPage onClick={props.onClickPrevPage}>&lt;</S.PrevPage>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <S.Page
              isActive={props.page === index + props.startPage}
              key={index + props.startPage}
              id={String(index + props.startPage)}
              onClick={props.onClickPage}
            >
              {index + props.startPage}
            </S.Page>
          )
      )}
      <S.NextPage onClick={props.onClickNextPage}>&gt;</S.NextPage>
    </S.PageWrapper>
  );
}
