import * as S from "./Header.styles";

export default function HeaderUI(props) {
  return (
    <S.HeaderWrapper>
      <S.HeaderTop>
        <S.HeaderTopLogo src="/logo.png" width="236" height="36" />
        <S.HeaderTopButtonWrapper>
          <S.HeaderTopButton variant="white">로그인</S.HeaderTopButton>
          <S.HeaderTopButton variant="main">회원가입</S.HeaderTopButton>
        </S.HeaderTopButtonWrapper>
      </S.HeaderTop>
      <S.HeaderBackgroundImage src="/main_image.png" />
      <S.Navigator>
        <S.NavigatorButtonOn>자유게시판</S.NavigatorButtonOn>
        <S.Line></S.Line>
        <S.NavigatorButtonOff>중고마켓</S.NavigatorButtonOff>
        <S.Line></S.Line>
        <S.NavigatorButtonOff>마이페이지</S.NavigatorButtonOff>
      </S.Navigator>
    </S.HeaderWrapper>
  );
}
