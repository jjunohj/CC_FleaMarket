import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";

export default function BoardCommentWriteUI(props: IBoardCommentListUIProps) {
  const onClickInfo = (event) => {
    alert(event.currentTarget.id + "님이 작성한 댓글입니다.");
  };

  // 이벤트 버블링이란 이벤트가 중첩되어 발생할 때, 가장 안쪽에 있는 요소에서 가장 바깥쪽에 있는 요소까지 이벤트가 전달되는 현상을 의미합니다.
  // 이벤트 버블링을 막기 위해서는 이벤트 객체의 stopPropagation() 메서드를 사용합니다.
  return (
    <div>
      {props.data?.fetchBoardComments.map((el) => (
        <S.ItemWrapper id={el.writer} onClick={onClickInfo}>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{el.writer}</S.Writer>
              </S.WriterWrapper>
              <S.Contents>{el.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.UpdateIcon src="/images/boardComment/list/option_update_icon.png/" />
              <S.DeleteIcon
                id={el._id}
                src="/images/boardComment/list/option_delete_icon.png/"
                onClick={props.onClickDelete}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{getDate(el?.createdAt)}</S.DateString>
        </S.ItemWrapper>
      ))}
    </div>
  );
}
