import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { useMutation } from "@apollo/client";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import { useState } from "react";
import { useRouter } from "next/router";
import type { ChangeEvent } from "react";
import type {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IUpdateBoardCommentInput,
} from "../../../../commons/types/generated/types";
import type { IBoardCommentWriteProps } from "./BoardCommentWrite.types";

export default function BoardCommentWrite(props: IBoardCommentWriteProps) {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickWrite = async () => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: 0,
          },
          boardId: String(router.query.boardId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });

      alert("댓글을 등록합니다.");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUpdate = () => {
    const updateBoardCommentInput: IUpdateBoardCommentInput = {};
    if (contents) updateBoardCommentInput.contents = contents;

    try {
      updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardCommentWriteUI
      contents={contents}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onClickWrite={onClickWrite}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
