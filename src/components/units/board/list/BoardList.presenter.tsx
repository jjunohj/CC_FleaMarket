import * as S from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import type { IBoardListUIProps } from "./BoardList.types";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.Row>
      {props.data?.fetchBoards.map((el) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ColumnBasic>
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
          <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.PageWrapper>
        <S.PrevPage onClick={props.onClickPrevPage}>&lt;</S.PrevPage>
        {new Array(10).fill(1).map(
          (_, index) =>
            index + props.startPage <= props.endPage && (
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
      <S.Footer>
        <S.Button onClick={props.onClickMoveToBoardNew}>
          <S.PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
