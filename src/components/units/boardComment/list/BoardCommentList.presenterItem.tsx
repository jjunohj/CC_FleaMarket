import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import type { IBoardCommentListUIItemProps } from "./BoardCommentList.types";
import { useState } from "react";
import BoardCommentWrite from "../write/BoardCommentWrite.container";

export default function BoardCommentListUIItem(
  props: IBoardCommentListUIItemProps,
) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  return (
    // isEdit이 false일 때, 즉 수정 버튼을 누르지 않았을 때는 일반 댓글이 보인다.
    // isEdit이 true일 때, 즉 수정 버튼을 눌렀을 때는 수정창이 보인다.
    <div>
      {props.isOpenDeleteModal && (
        <S.PasswordModal visible={true} onOk={props.onClickDelete}>
          <div>비밀번호 입력: </div>
          <S.PasswordInput
            type="password"
            onChange={props.onChangeDeletePassword}
          />
        </S.PasswordModal>
      )}
      {!isEdit && (
        <S.ItemWrapper>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{props.el?.writer}</S.Writer>
                <S.Star value={props.el?.rating} disabled />
              </S.WriterWrapper>
              <S.Contents>{props.el?.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.UpdateIcon
                src="/images/boardComment/list/option_update_icon.png/"
                onClick={onClickUpdate}
              />
              <S.DeleteIcon
                id={props.el?._id}
                src="/images/boardComment/list/option_delete_icon.png/"
                onClick={props.onClickOpenDeleteModal}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{getDate(props.el?.createdAt)}</S.DateString>
        </S.ItemWrapper>
      )}
      {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </div>
  );
}
