import type { IQuery } from "../../../../commons/types/generated/types";
import type { YouTubeProps } from "react-youtube";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  opts: YouTubeProps["opts"];
  locationToggle: boolean;
  onClickMoveToBoardEdit: () => void;
  onClickMoveToBoardList: () => void;
  onPlayerReady: YouTubeProps["onReady"];
  onClickDelete: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
  onToggleLocation: () => void;
}

export interface ILocationPopUpProps {
  toggle: boolean;
}
