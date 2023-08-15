import styled from "@emotion/styled";
import type { IButtonProps } from "./BoardCommentWrite.types";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;
`;

export const CommentIcon = styled.img``;

export const CommentTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 4rem;
  height: 1rem;
  justify-content: space-between;
  align-items: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const ContentsWrapper = styled.div`
  border: 1px solid lightgray;
`;

export const Input = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid lightgray;
  margin-right: 20px;
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`;

export const Button = styled.button`
  width: 91px;
  height: 51px;
  background-color: ${(props: IButtonProps) =>
    props.isEdit ? "#ffd600" : "#000000"};
  color: ${(props: IButtonProps) => (props.isEdit ? "#000000" : "#ffffff")};
  cursor: pointer;
`;

export const Star = styled(Rate)``;