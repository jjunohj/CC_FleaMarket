/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Image, colors, calcRem, fontSizes } from "../../commons/global";

export function CommentWrapper({ children }) {
  return (
    <div
      css={{
        width: calcRem(1920),
        minHeight: calcRem(100),
        marginTop: calcRem(20),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}

export function CommentContainer({ children }) {
  return (
    <div
      css={{
        width: calcRem(1200),
        minHeight: calcRem(100),
        marginTop: calcRem(20),
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "start",
      }}
    >
      <div
        css={{
          width: "100%",
          minHeight: calcRem(40),
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Image src="/comment_icon.png" width="1.5rem" height="1.5rem"></Image>
        <span
          css={{
            fontFamily: "Noto Sans CJK KR",
            fontSize: "1.125rem",
            fontWeight: "500",
            color: colors.black,
            marginLeft: "0.5rem",
          }}
        >
          댓글
        </span>
      </div>
      {children}
    </div>
  );
}

export function CommentContentsInput({ placeholder }) {
  return (
    <input
      css={{
        width: "100%",
        minHeight: calcRem(40),
        padding: "1.25rem",
        border: "none",
        outline: "none",
        fontFamily: "Noto Sans CJK KR",
        fontSize: fontSizes.medium,
        fontWeight: "500",
        color: colors.black,
        placeholder: placeholder,
        "&::placeholder": {
          color: colors.gray_4,
        },
      }}
    ></input>
  );
}

export function CommentContentsContainer({ children }) {
  return (
    <div
      css={{
        width: calcRem(1200),
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        border: "1px solid #BDBDBD",
        marginTop: "1rem",
      }}
    >
      {children}
      <div
        css={{
          width: "100%",
          minHeight: calcRem(40),
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #F2F2F2",
        }}
      >
        <div
          css={{
            width: "4rem",
            height: "3.15rem",
            fontFamily: "Noto Sans CJK KR",
            fontSize: fontSizes.medium,
            fontWeight: "500",
            color: colors.gray_4,
            border: "none",
            textAlign: "center",
            lineHeight: "3.15rem",
          }}
        >
          0/100
        </div>
        <div
          css={{
            width: "6rem",
            height: "3.15rem",
            fontFamily: "Noto Sans CJK KR",
            fontSize: fontSizes.medium,
            fontWeight: "500",
            color: colors.white,
            backgroundColor: colors.black,
            border: "none",
            cursor: "pointer",
            textAlign: "center",
            lineHeight: "3.15rem",
          }}
        >
          등록하기
        </div>
      </div>
    </div>
  );
}

export function CommentWriterInput({}) {
  return (
    <input
      css={{
        width: "11.25rem",
        minHeight: "3.25rem",
        padding: "0.8rem 0 0.8rem 1.25rem",
        margin: "1rem 1rem 0 0",
        border: "1px solid #BDBDBD",
        outline: "none",
        fontFamily: "Noto Sans CJK KR",
        fontSize: fontSizes.medium,
        fontWeight: "500",
        color: colors.black,
      }}
    ></input>
  );
}

export function BoardComment({ profileImage, writer, content, date, stars }) {
  return (
    <div
      css={{
        width: calcRem(1200),
        minHeight: calcRem(120),
        marginTop: calcRem(20),
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "start",
        borderBottom: "1px solid #BDBDBD",
      }}
    >
      <img
        src={profileImage}
        css={{
          marginTop: calcRem(5),
          marginRight: calcRem(10),
          width: calcRem(48),
          height: calcRem(48),
          borderRadius: "50%",
        }}
      />
      <div
        css={{
          width: "100%",
          minHeight: calcRem(120),
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <div
          css={{
            width: "100%",
            height: calcRem(40),
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <div
            css={{
              fontFamily: "Noto Sans CJK KR",
              fontSize: fontSizes.medium,
              fontWeight: "500",
              color: colors.black,
              paddingTop: "0.1rem",
              marginRight: "0.5rem",
            }}
          >
            {writer}
          </div>
          <CommentStars></CommentStars>
        </div>
        <div
          css={{
            width: "100%",
            minHeight: calcRem(40),
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "start",
            fontFamily: "Noto Sans CJK KR",
            fontSize: fontSizes.medium,
            fontWeight: "400",
            color: colors.black,
          }}
        >
          {content}
        </div>
        <div
          css={{
            width: "100%",
            height: calcRem(40),
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
            fontFamily: "Noto Sans CJK KR",
            fontSize: fontSizes.xsmall,
            fontWeight: "400",
            color: colors.gray_4,
          }}
        >
          {date}
        </div>
      </div>
      <div
        css={{
          width: calcRem(60),
          height: calcRem(48),
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <img
          src="/comment_edit.png"
          css={{
            width: calcRem(24),
            height: calcRem(24),
            cursor: "pointer",
            margin: "0rem 0.5rem",
          }}
        />
        <img
          src="/comment_delete.png"
          css={{
            width: calcRem(24),
            height: calcRem(24),
            cursor: "pointer",
            margin: "0rem 0.5rem",
          }}
        />
      </div>
    </div>
  );
}

export function CommentStars({}) {
  return (
    <div
      css={{
        boxSizing: "border-box",
        width: "calcRem(120)",
        height: calcRem(40),
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <img
        src="/star_unactivated.png"
        css={{
          width: calcRem(24),
          height: calcRem(24),
        }}
      />
      <img
        src="/star_unactivated.png"
        css={{
          width: calcRem(24),
          height: calcRem(24),
        }}
      />
      <img
        src="/star_unactivated.png"
        css={{
          width: calcRem(24),
          height: calcRem(24),
        }}
      />
      <img
        src="/star_unactivated.png"
        css={{
          width: calcRem(24),
          height: calcRem(24),
        }}
      />
      <img
        src="/star_unactivated.png"
        css={{
          width: calcRem(24),
          height: calcRem(24),
        }}
      />
    </div>
  );
}

export function CommentWriterInputWrapper({ children }) {
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
