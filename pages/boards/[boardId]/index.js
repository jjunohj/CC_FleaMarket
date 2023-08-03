import Header from "../../../src/components/commons/header/Header.container";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import { GlobalStyle } from "../../../styles/global";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";

export default function BoardDetailUI() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
