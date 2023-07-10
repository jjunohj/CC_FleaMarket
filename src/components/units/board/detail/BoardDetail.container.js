import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();

  //data를 받아올 때까지 기다렸다가 실행하는 게 아니라, data가 없어도 일단 실행하고, data를 불러오면 한 번 더 실행한다.
  const data = useQuery(FETCH_BOARD, {
    // router.query.[boardId], 대괄호가 받은 게시글 Id를 쿼리로 가져온다.
    variables: { boardId: router.query.boardId },
  });

  return <BoardDetailUI data={data} />;
}
