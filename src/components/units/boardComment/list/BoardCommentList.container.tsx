import BoardCommentListUI from "./BoardCommentList.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import type { ChangeEvent, MouseEvent } from "react";
import { useState } from "react";
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from "./BoardCommentList.queries";
import type {
  IQuery, IMutation, IMutationDeleteBoardCommentArgs,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardCommentList() {
  const router = useRouter();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [myBoardCommentId, setMyBoardCommentId] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickDelete = async (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) return;
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: myBoardCommentId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const onClickOpenDeleteModal = (event: MouseEvent<HTMLImageElement>) => {
    if (!(event.target instanceof HTMLImageElement)) return;
    setMyBoardCommentId(event.target.id);
    setIsOpenDeleteModal(true);
  };

  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  return <BoardCommentListUI 
            data={data}
            isOpenDeleteModal={isOpenDeleteModal}
            onClickDelete={onClickDelete}
            onChangeDeletePassword={onChangeDeletePassword}
            onClickOpenDeleteModal={onClickOpenDeleteModal}
            />;
}
