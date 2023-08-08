import { gql } from "@apollo/client";

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      createdAt
      rating
    }
  }
`;

export const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;

export const UPDATE_BOARD_COMMENT = gql`
  mutation updateBoardComment(
    $password: String
    $boardCommentId: ID!
    $updateBoardCommentInput: UpdateBoardCommentInput!
  ) {
    updateBoardComment(
      password: $password
      boardCommentId: $boardCommentId
      updateBoardCommentInput: $updateBoardCommentInput
    )
  }
`;
