/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { colors, calcRem } from "./global";

export function BoardWrapper({ children }) {
  return (
    <div
      css={{
        width: "70rem",
        minHeight: "80rem",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "3.5rem",
        padding: "6rem 6.5rem 6.5rem 6.5rem",
        border: "none",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      {children}
    </div>
  );
}

export function BoardTop({ children }) {
  return (
    <div
      css={{
        width: "70rem",
        height: "6rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #BDBDBD",
      }}
    >
      {children}
    </div>
  );
}

export function BoardTopLeftWriterInfo({ src, writer, date }) {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={src}
        css={{
          width: "4rem",
          height: "4rem",
          borderRadius: "50%",
          marginRight: "1rem",
        }}
      />
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div
          css={{
            fontSize: "1.5rem",
            fontFamily: "Noto Sans CJK KR",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            color: colors.black,
          }}
        >
          {writer}
        </div>
        <div
          css={{
            fontSize: "1rem",
            fontFamily: "Noto Sans CJK KR",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            color: colors.gray,
          }}
        >
          Date: {date}
        </div>
      </div>
    </div>
  );
}

export function BoardTopRightIcons({ children }) {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}

export function BoardContentsTitle({ children }) {
  return (
    <div
      css={{
        width: "100%",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        fontSize: "2.5rem",
        fontFamily: "Noto Sans CJK KR",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal",
        color: colors.black,
        marginTop: "3rem",
        marginBottom: "3rem",
      }}
    >
      {children}
    </div>
  );
}

export function BoardContentsImage({ src }) {
  return (
    <img
      src={src}
      css={{
        width: "100%",
      }}
    />
  );
}

export function BoardContentsText({ children }) {
  return (
    <div
      css={{
        width: "100%",
        fontSize: "1.5rem",
        fontFamily: "Noto Sans CJK KR",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        color: colors.black,
        marginTop: "3rem",
        marginBottom: "3rem",
      }}
    >
      {children}
    </div>
  );
}

export function BoardBottom({ children }) {
  return (
    <div
      css={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3rem",
      }}
    >
      {children}
    </div>
  );
}
export function BoardBottomBanner({ src }) {
  return (
    <img
      src={src}
      css={{
        width: "40rem",
      }}
    />
  );
}
export function BoardBottomLikes({ likes, unlikes }) {
  return (
    <div
      css={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/thumb_up.svg"
        css={{
          width: "2rem",
          height: "2rem",
          marginRight: "1rem",
        }}
      />
      <div
        css={{
          fontSize: "1.5rem",
          fontFamily: "Noto Sans CJK KR",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
          color: colors.main,
          marginRight: "3rem",
        }}
      >
        {likes}
      </div>
      <img
        src="/thumb_down.svg"
        css={{
          width: "2rem",
          height: "2rem",
          marginRight: "1rem",
        }}
      />
      <div
        css={{
          fontSize: "1.5rem",
          fontFamily: "Noto Sans CJK KR",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
          color: colors.black,
        }}
      >
        {unlikes}
      </div>
    </div>
  );
}
