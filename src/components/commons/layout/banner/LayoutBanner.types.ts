export interface ISliderProps {
  /** 슬라이더 아이템 요소 */
  children?: React.ReactNode;
  /** 커스텀 클래스 */
  className?: string;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */
  loop?: boolean;
}

export interface itemsProps {
  item: string;
  name: string;
}
