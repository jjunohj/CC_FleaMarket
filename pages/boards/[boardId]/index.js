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
  colors,
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
  BoardButton,
  BoardButtonContainer,
} from "../../../styles/board";

import {
  BoardComment,
  BoardNewCommentContainer,
  BoardNewCommentContentsContainer,
  BoardNewCommentInput,
  BoardNewCommentContentsInput,
  CommentStars,
} from "../../../styles/comment";

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
        <BoardButtonContainer>
          <BoardButton>목록으로</BoardButton>
          <BoardButton>수정하기</BoardButton>
          <BoardButton>삭제하기</BoardButton>
        </BoardButtonContainer>
        <Line width="75rem" height="1px" color="gray_4"></Line>
        <BoardNewCommentContainer>
          <Flex>
            <BoardNewCommentInput placeholder="작성자"></BoardNewCommentInput>
            <BoardNewCommentInput placeholder="비밀번호"></BoardNewCommentInput>
            <CommentStars></CommentStars>
          </Flex>

          <BoardNewCommentContentsContainer>
            <BoardNewCommentContentsInput placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></BoardNewCommentContentsInput>
          </BoardNewCommentContentsContainer>
        </BoardNewCommentContainer>
        <BoardComment
          profileImage="/profile_image.png"
          writer={data.data?.fetchBoard.writer}
          content={data.data?.fetchBoard.contents}
          date={data.data?.fetchBoard.createdAt}
          start="3"
        ></BoardComment>
      </BodyWrapper>
    </>
  );
}
