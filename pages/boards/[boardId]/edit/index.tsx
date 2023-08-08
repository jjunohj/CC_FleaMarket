import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import GlobalStyle from "../../../../src/components/commons/global";
import Header from "../../../../src/components/commons/header/Header.container";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function BoardsEditPage() {
  const router = useRouter();

  // if (typeof router.query.boardId !== "string") {
  //   router.push("/")
  //   return <></>
  // }

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query.boardId),
      },
    }
  );

  return (
    <>
      <GlobalStyle />
      <Header />
      <BoardWrite isEdit={true} data={data} />
    </>
  );
}
