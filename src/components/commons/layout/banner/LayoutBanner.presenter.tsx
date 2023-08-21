import * as S from "./LayoutBanner.styles";
import type { ISliderProps, itemsProps } from "./LayoutBanner.types";
import { useMemo } from "react";
import type { Settings } from "react-slick";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items: itemsProps[] = [
  {
    item: "/images/banner/banner_01.png",
    name: "01",
  },
  {
    item: "/images/banner/banner_02.png",
    name: "02",
  },
  {
    item: "/images/banner/banner_03.png",
    name: "03",
  },
  {
    item: "/images/banner/banner_04.png",
    name: "04",
  },
  {
    item: "/images/banner/banner_05.png",
    name: "05",
  },
  {
    item: "/images/banner/banner_06.png",
    name: "06",
  },
  {
    item: "/images/banner/banner_07.png",
    name: "07",
  },
];

export default function LayoutBannerUI() {
  const sliderProps: ISliderProps = {
    autoplay: true,
    speed: 600,
    loop: false,
  };

  const settings = useMemo<Settings>(
    () => ({
      dots: true,
      infinite: sliderProps.loop,
      speed: sliderProps.speed,
      slidesToShow: 1,
      autoplay: Boolean(sliderProps.autoplay),
      autoplaySpeed:
        typeof sliderProps.autoplay === "boolean" ? 3000 : sliderProps.autoplay,
    }),
    [sliderProps.autoplay, sliderProps.loop, sliderProps.speed] // 얘네가 바뀌면 settings도 초기화하고 다시
  );

  return (
    <S.SlideWrapper>
      <Slider {...settings}>
        {items.map((item, index) => (
          <S.SliderItem key={index}>
            <img src={item.item} alt={item.name} />
          </S.SliderItem>
        ))}
      </Slider>
    </S.SlideWrapper>
  );
}
