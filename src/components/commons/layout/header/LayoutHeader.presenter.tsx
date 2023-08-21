import * as S from "./LayoutHeader.styles";
import type { ILayoutHeaderUIProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  return (
    <S.Wrapper>
      <S.LogoWrapper id="logo" onClick={props.onClickMenu}>
        <S.Logo src="/images/logo.png" />
      </S.LogoWrapper>
      <S.MenuWrapper>
        <S.Menu id="login" onClick={props.onClickMenu}>
          로그인
        </S.Menu>
        <S.Menu id="signup" onClick={props.onClickMenu}>
          회원가입
        </S.Menu>
      </S.MenuWrapper>
    </S.Wrapper>
  );
}
