import * as S from "./LayoutNavigation.styles";
import type { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

const MENU = [
  { id: "/boards", name: "자유게시판" },
  { id: "/market", name: "중고마켓" },
  { id: "/mypage", name: "마이페이지" },
];

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  return (
    <S.Wrapper>
      <S.MenuWrapper>
        {MENU.map((data) => (
          <S.Menu key={data.id} id={data.id} onClick={props.onClickMenu}>
            {data.name}
          </S.Menu>
        ))}
      </S.MenuWrapper>
    </S.Wrapper>
  );
}
