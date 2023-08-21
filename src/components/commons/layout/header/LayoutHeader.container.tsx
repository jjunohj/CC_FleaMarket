import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useRouter } from "next/router";
import type { MouseEvent } from "react";

export default function LayoutHeader() {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget.id === "logo") {
      router.push("/");
    } else if (event.currentTarget.id === "login") {
      router.push("/login");
    } else if (event.currentTarget.id === "signup") {
      router.push("/signup");
    }
  };

  return <LayoutHeaderUI onClickMenu={onClickMenu} />;
}
