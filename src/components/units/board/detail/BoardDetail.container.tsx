import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    },
  );

  const onClickMoveToBoardList = () => {
    router.push("/boards");
  };

  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${String(router.query.boardId)}/edit`);
  };

  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: { boardId: router.query.boardId },
      });
      router.push("/boards");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      onClickDelete={onClickDelete}
    />
  );
}
