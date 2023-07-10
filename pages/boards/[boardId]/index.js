import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

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
