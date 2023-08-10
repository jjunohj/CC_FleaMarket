import BoardCommentListUI from "./BoardCommentList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import type {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardCommentList() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  return <BoardCommentListUI data={data} />;
}
