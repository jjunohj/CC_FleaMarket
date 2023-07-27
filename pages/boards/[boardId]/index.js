import Header from "../../../src/components/commons/header/Header.container";
import Comment from "../../../src/components/units/comment/Comment.container";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import { GlobalStyle } from "../../../styles/global";

export default function BoardDetailUI() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BoardDetail />
      <Comment />
    </>
  );
}
