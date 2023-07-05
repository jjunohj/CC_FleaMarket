import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

import {
  HeaderWrapper,
  HeaderTop,
  HeaderTopLogo,
  HeaderImage,
  Navigator,
  NavigatorButtonOn,
  NavigatorButtonOff,
} from "../../../styles/header";

import {
  calcRem,
  Button,
  Image,
  Flex,
  FlexCenter,
  FlexBetween,
  FlexColumn,
  FlexColumnCenter,
  FlexColumnBetween,
  fontSizes,
  Line,
  BodyWrapper,
  ProfileImage,
  Icon,
} from "../../../styles/global";

import {
  BoardWrapper,
  BoardTop,
  BoardTopLeftWriterInfo,
  BoardTopRightIcons,
  BoardContentsTitle,
  BoardContentsImage,
  BoardContentsText,
  BoardBottom,
  BoardBottomBanner,
  BoardBottomLikes,
} from "../../../styles/board";

export const FETCH_BOARD = gql`
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

export default function BoardDetailUI() {
  const router = useRouter();

  const data = useQuery(FETCH_BOARD, {
    // router.query.[boardId], 대괄호가 받은 게시글 Id를 쿼리로 가져온다.
    variables: { boardId: router.query.boardId },
  });

  return (
    <>
      <header>
        <HeaderWrapper>
          <HeaderTop>
            <FlexBetween width="75rem">
              <HeaderTopLogo src="/logo.png" width="236" height="36" />
              <Flex>
                <Button variant="white">로그인</Button>
                <Button variant="main">회원가입</Button>
              </Flex>
            </FlexBetween>
          </HeaderTop>
          <HeaderImage src="/main_image.png" />
          <Navigator>
            <NavigatorButtonOn>자유게시판</NavigatorButtonOn>
            <Line width="1" height="20" color="white"></Line>
            <NavigatorButtonOff>중고마켓</NavigatorButtonOff>
            <Line width="1" height="20" color="white"></Line>
            <NavigatorButtonOff>마이페이지</NavigatorButtonOff>
          </Navigator>
        </HeaderWrapper>
      </header>
      <BodyWrapper>
        <BoardWrapper>
          <BoardTop>
            <BoardTopLeftWriterInfo
              src="/profile_image.png"
              writer={data.data?.fetchBoard.writer}
              date={data.data?.fetchBoard.createdAt}
            ></BoardTopLeftWriterInfo>
            <BoardTopRightIcons>
              <Icon src="/link.png" width="2rem" height="2rem" />
              <Icon src="/location.png" width="2rem" height="2rem" />
            </BoardTopRightIcons>
          </BoardTop>
          <BoardContentsTitle>{data.data?.fetchBoard.title}</BoardContentsTitle>
          <BoardContentsImage src="/contents_image.svg" />
          <BoardContentsText>
            {data.data?.fetchBoard.contents}
          </BoardContentsText>
          <BoardBottom>
            <BoardBottomBanner src="/contents_banner.png"></BoardBottomBanner>
            <BoardBottomLikes likes="1920" unlikes="1920"></BoardBottomLikes>
          </BoardBottom>
        </BoardWrapper>
      </BodyWrapper>
    </>
  );
}
