/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
export const calcRem = (px) => `${px / 16}rem`;

export const colors = {
  main: "#FFD600",
  white: "#FFFFFF",
  black: "#000000",
  gray_1: "#F5F5F5",
  gray_4: "#BDBDBD",
  default: "#999999",
};

export const fontSizes = {
  xsmall: calcRem(12),
  small: calcRem(14),
  medium: calcRem(16),
  large: calcRem(18),
  xlarge: calcRem(20),
  xxlarge: calcRem(22),
  title: calcRem(24),
  titleLarge: calcRem(36),
  titleXlarge: calcRem(48),
};

export function Flex({ children }) {
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

export function FlexCenter({ children, width }) {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: width,
      }}
    >
      {children}
    </div>
  );
}

export function FlexBetween({ children, width }) {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: width,
      }}
    >
      {children}
    </div>
  );
}

export function FlexColumn({ children }) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
}

export function FlexColumnCenter({ children }) {
  return (
    <div
      css={{
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

export function FlexColumnBetween({ children }) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}

export function Image({ src, width, height }) {
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

export function Button({ children, variant = "default" }) {
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
        backgroundColor: colors[variant],
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

export function Line({ width, height, color }) {
  return (
    <div
      css={{
        width: width,
        height: height,
        backgroundColor: colors[color],
      }}
    />
  );
}

export function BodyWrapper({ children }) {
  return (
    <div
      css={{
        width: calcRem(1920),
        minHeight: calcRem(600),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}

export function ProfileImage({ src, width, height }) {
  return (
    <img
      src={src}
      css={{
        width: calcRem(width),
        height: calcRem(height),
        borderRadius: "50%",
      }}
    />
  );
}

export function Icon({ src, width, height }) {
  return (
    <img
      src={src}
      css={{
        width: calcRem(width),
        height: calcRem(height),
        cursor: "pointer",
        margin: "0.5rem",
      }}
    />
  );
}
