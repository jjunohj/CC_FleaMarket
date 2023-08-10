import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import type { IBoardCommentListUIItemProps } from "./BoardCommentList.types";
import type { MouseEvent } from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import BoardCommentWrite from "../write/BoardCommentWrite.container";

export default function BoardCommentListUIItem(
  props: IBoardCommentListUIItemProps,
) {
  const router = useRouter();

  // isEdit의 기본값은 false로, 수정 버튼을 누르지 않았을 때는 일반 댓글이 보인다.
  const [isEdit, setIsEdit] = useState(false);

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    const myPassword = prompt("비밀번호를 입력하세요.");
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  return (
    // isEdit이 false일 때, 즉 수정 버튼을 누르지 않았을 때는 일반 댓글이 보인다.
    // isEdit이 true일 때, 즉 수정 버튼을 눌렀을 때는 수정창이 보인다.
    <>
      {!isEdit && (
        <S.ItemWrapper>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{props.el?.writer}</S.Writer>
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
                onClick={onClickDelete}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{getDate(props.el?.createdAt)}</S.DateString>
        </S.ItemWrapper>
      )}
      {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
