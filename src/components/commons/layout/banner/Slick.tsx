import { useMemo } from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideWrapper = styled.section`
  position: relative;
`;

interface ISliderProps {
  /** 슬라이더 아이템 요소 */
  children: React.ReactNode;
  /** 커스텀 클래스 */
  className?: string;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */
  loop?: boolean;
}

export default function Slick({
  children,
  className,
  autoplay = true,
  speed = 300,
  loop = false,
}: ISliderProps) {
  const settings = useMemo<Settings>(
    () => ({
      dots: true,
      infinite: loop,
      speed,
      slidesToShow: 1,
      autoplay: Boolean(autoplay),
      autoplaySpeed: typeof autoplay === "boolean" ? 3000 : autoplay,
    }),
    [autoplay, loop, speed]
  );
  return (
    <SlideWrapper className={className}>
      <Slider {...settings}>{children}</Slider>
    </SlideWrapper>
  );
}
