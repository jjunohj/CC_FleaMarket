import styled from "@emotion/styled";
import type { IPageProps } from "./Pagination.types";

export const Page = styled.span`
  margin: 0px 10px;
  font-family: Spoqa Han Sans Neo;
  font-size: 16px;
  font-weight: ${(props: IPageProps) => (props.isActive ? "700" : "400")};
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  text-decoration-line: ${(props: IPageProps) =>
    props.isActive ? "underline" : "none"};
  color: ${(props: IPageProps) => (props.isActive ? "#FFD600" : "#4F4F4F")};
  cursor: pointer;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
`;

export const NextPage = styled.div`
  cursor: pointer;
`;

export const PrevPage = styled.div`
  cursor: pointer;
`;
