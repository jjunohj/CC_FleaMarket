/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { colors, calcRem } from "./global";

export function HeaderWrapper({ children }) {
  return (
    <div
      css={{
        boxSizing: "border-box",
        width: calcRem(1920),
        minHeight: calcRem(600),
        backgroundColor: colors.white,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}

export function HeaderTop({ children }) {
  return (
    <div
      css={{
        width: calcRem(1920),
        padding: "3.5rem 22.5rem",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
}

export function HeaderTopLogo({ src, width, height }) {
  return (
    <img
      src={src}
      css={{
        width: calcRem(width),
        height: calcRem(height),
      }}
    />
  );
}

export function HeaderImage({ src }) {
  return (
    <img
      src={src}
      css={{
        width: "100%",
        height: calcRem(400),
      }}
    />
  );
}

export function Navigator({ children }) {
  return (
    <navigator
      css={{
        width: "100%",
        height: "4rem",
        backgroundColor: colors.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      {children}
    </navigator>
  );
}

export function NavigatorButtonOn({ children }) {
  return (
    <button
      css={{
        width: "8rem",
        height: "4rem",
        fontFamily: "Noto Sans CJK KR",
        fontSize: "1.125rem",
        fontWeight: "700",
        lineHeight: "normal",
        backgroundColor: colors.main,
        border: "none",
        color: colors.black,
      }}
    >
      {children}
    </button>
  );
}

export function NavigatorButtonOff({ children }) {
  return (
    <button
      css={{
        width: "8rem",
        height: "4rem",
        fontFamily: "Noto Sans CJK KR",
        fontSize: "1.125rem",
        fontWeight: "500",
        lineHeight: "normal",
        backgroundColor: colors.main,
        border: "none",
        color: "#AB9000",
      }}
    >
      {children}
    </button>
  );
}
