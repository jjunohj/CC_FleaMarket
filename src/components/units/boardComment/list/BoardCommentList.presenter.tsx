import type { IBoardCommentListUIProps } from "./BoardCommentList.types";
import BoardCommentListUIItem from "./BoardCommentList.presenterItem";

export default function BoardCommentWriteUI(props: IBoardCommentListUIProps) {
  // 이벤트 버블링이란 이벤트가 중첩되어 발생할 때, 가장 안쪽에 있는 요소에서 가장 바깥쪽에 있는 요소까지 이벤트가 전달되는 현상을 의미합니다.
  // 이벤트 버블링을 막기 위해서는 이벤트 객체의 stopPropagation() 메서드를 사용합니다.
  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <BoardCommentListUIItem key={el._id} el={el} />
      ))}
    </>
  );
}
