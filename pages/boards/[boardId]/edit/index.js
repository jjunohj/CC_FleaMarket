import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import GlobalStyle from "../../../../src/components/commons/global";
import Header from "../../../../src/components/commons/header/Header.container";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

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

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  return (
    <>
      <GlobalStyle />
      <Header />
      <BoardWrite isEdit={true} data={data} />
    </>
  );
}
