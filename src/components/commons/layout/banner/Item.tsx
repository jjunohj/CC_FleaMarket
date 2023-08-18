import styled from "@emotion/styled";
import Slick from "./Slick";

interface itemsProps {
  item: string;
  name: string;
}

const SliderItem = styled.div`
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const items: itemsProps[] = [
  {
    item: "https://github.com/jjunohj/CC_FleaMarket/assets/121740394/ffa91539-e468-4024-8f0b-9bdf9393fad9",
    name: "이미지01",
  },
  {
    item: "http://placehold.it/1200x400/ff0000",
    name: "이미지02",
  },
  {
    item: "http://placehold.it/1200x400/00ffff",
    name: "이미지03",
  },
];

export default function Item() {
  return (
    <Slick>
      {items.map((item, index) => (
        <SliderItem key={index}>
          <img src={item.item} alt={item.name} />
        </SliderItem>
      ))}
    </Slick>
  );
}
