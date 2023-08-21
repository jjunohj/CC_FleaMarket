import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 4rem;
  background-color: #ffd600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuWrapper = styled.div`
  width: 120rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.div`
  width: 10rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #ab9000;
  /* ${(props) => (props ? "#514400" : "#ab9000")}; */
  text-align: center;
  font-family: Noto Sans CJK KR;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  cursor: pointer;
  &:hover {
    color: #514400;
  }
`;

export const Line = styled.div`
  width: 0.0625rem;
  height: 1.5rem;
  background-color: #ffffff;
  margin: 0 1.25rem;
`;
