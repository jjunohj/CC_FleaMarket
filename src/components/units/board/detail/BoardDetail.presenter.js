import * as S from "./BoardDetail.styles";

export default function BoardDetailUI(props) {
  return (
    <S.BodyWrapper>
      <S.BoardWrapper>
        <S.BoardTop>
          <S.BoardTopLeftWriterInfo
            src="/profile_image.png"
            writer={props.data.data?.fetchBoard.writer}
            date={props.data.data?.fetchBoard.createdAt}
          ></S.BoardTopLeftWriterInfo>
          <S.BoardTopRightIcons>
            <S.Icon src="/link.png" width="2rem" height="2rem" />
            <S.Icon src="/location.png" width="2rem" height="2rem" />
          </S.BoardTopRightIcons>
        </S.BoardTop>
        <S.BoardContentsTitle>
          {props.data.data?.fetchBoard.title}
        </S.BoardContentsTitle>
        <S.BoardContentsImage src="/contents_image.svg" />
        <S.BoardContentsText>
          {props.data.data?.fetchBoard.contents}
        </S.BoardContentsText>
        <S.BoardBottom>
          <S.BoardBottomBanner src="/contents_banner.png"></S.BoardBottomBanner>
          <S.BoardBottomLikes likes="1920" unlikes="1920"></S.BoardBottomLikes>
        </S.BoardBottom>
      </S.BoardWrapper>
      <S.BoardButtonContainer>
        <S.BoardButton>목록으로</S.BoardButton>
        <S.BoardButton>수정하기</S.BoardButton>
        <S.BoardButton>삭제하기</S.BoardButton>
      </S.BoardButtonContainer>
      <S.Line width="75rem" height="1px" color="gray_4"></S.Line>
    </S.BodyWrapper>
  );
}
