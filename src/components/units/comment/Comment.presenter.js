import * as S from "./Comment.styles";

export default function CommentUI(props) {
  return (
    <S.CommentWrapper>
      <S.CommentContainer>
        <S.CommentWriterInputWrapper>
          <S.CommentWriterInput placeholder="작성자"></S.CommentWriterInput>
          <S.CommentWriterInput placeholder="비밀번호"></S.CommentWriterInput>
          <S.CommentStars></S.CommentStars>
        </S.CommentWriterInputWrapper>
        <S.CommentContentsContainer>
          <S.CommentContentsInput placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></S.CommentContentsInput>
        </S.CommentContentsContainer>
      </S.CommentContainer>
      <S.BoardComment
        profileImage="/profile_image.png"
        writer="홍길동"
        content="서로 이웃해요 !"
        date="2021.08.31"
        start="3"
      ></S.BoardComment>
    </S.CommentWrapper>
  );
}
