/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { colors, calcRem } from "../global";

export function HeaderWrapper({ children }) {
  return (
    <header
      css={{
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
    </header>
  );
}

export function HeaderTop({ children }) {
  return (
    <div
      css={{
        boxSizing: "border-box",
        width: calcRem(1920),
        padding: "3.5rem 22.5rem",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}

export function HeaderTopButtonWrapper({ children }) {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}

export function HeaderTopButton({ children, ...Props }) {
  return (
    <button
      css={{
        width: "5.75rem",
        display: "inline-flex",
        padding: "0.625rem 1rem",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0.625rem",
        color: colors.black,
        backgroundColor: Props.variant,
        cursor: "pointer",
        border: "none",
        fontFamily: "Noto Sans CJK KR",
        fontSize: "${fontSizes.medium}",
        fontWeight: "700",
      }}
    >
      {children}
    </button>
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

export function HeaderBackgroundImage({ src }) {
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

export function Line({}) {
  return (
    <div
      css={{
        width: "1px",
        height: "20px",
        backgroundColor: "white",
      }}
    />
  );
}
