import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14.75rem;
  height: 2.25rem;

  :hover {
    cursor: pointer;
  }
`;

export const Logo = styled.img``;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 11rem;
  height: 2.25rem;
`;

export const Menu = styled.div`
  display: inline-flex;
  padding: 0.625rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem;
  background-color: ${(props) =>
    props.id === "signup" ? "#ffd600" : "transparent"};

  text-align: center;
  font-family: Noto Sans CJK KR;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  :hover {
    cursor: pointer;
  }
`;
