import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";
import GlobalStyle from "../../../src/components/commons/global";
import Header from "../../../src/components/commons/header/Header.container";

export default function BoardWritePage() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BoardWrite />
    </>
  );
}
