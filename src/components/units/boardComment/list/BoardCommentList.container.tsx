import BoardCommentListUI from "./BoardCommentList.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import { MouseEvent } from "react";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardCommentList() {
  const router = useRouter();
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    const myPassword = prompt("비밀번호를 입력하세요.");
    if (event.target instanceof HTMLImageElement)
      try {
        await deleteBoardComment({
          variables: {
            password: myPassword,
            boardCommentId: event.target.id,
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

  return <BoardCommentListUI data={data} onClickDelete={onClickDelete} />;
}
