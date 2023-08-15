import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const Title = styled.h1`
  padding-top: 80px;
`;

export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
`;

export const YoutubeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;



export const Footer = styled.div`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  cursor: pointer;
`;

export const LikeIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--main, #FFD600);
`

export const LikeCount = styled.div`
  margin-top: 4px;
  color: var(--main, #FFD600);
  text-align: center;
  font-family: Noto Sans CJK KR;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DislikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 40px;
  cursor: pointer;
`;

export const DislikeIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--gray-3, #828282);
`

export const DislikeCount = styled.div`
  margin-top: 4px;
  color: var(--gray-3, #828282);
  text-align: center;
  font-family: Noto Sans CJK KR;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;



export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: gold;
    border-color: white;
  }
`;
