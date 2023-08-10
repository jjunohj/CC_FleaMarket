import * as S from "./BoardCommentWrite.styles";
import type { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <S.Wrapper>
      {!props.isEdit && (
        <S.CommentTitle>
          <S.CommentIcon src="/images/boardComment/write/comment.png" />
          <span>댓글</span>
        </S.CommentTitle>
      )}

      <S.InputWrapper>
        <S.Input
          placeholder="작성자"
          defaultValue={props.el?.writer || ""}
          onChange={props.onChangeWriter}
        />
        <S.Input
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangePassword}
        />
      </S.InputWrapper>
      <S.ContentsWrapper>
        <S.Contents
          maxLength={100}
          onChange={props.onChangeContents}
          defaultValue={props.el?.contents || ""}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <S.BottomWrapper>
          <S.ContentsLength>{props.contents.length}/100</S.ContentsLength>
          <S.Button
            isEdit={props.isEdit}
            onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.Button>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
