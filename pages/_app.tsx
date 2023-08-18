import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { globalStyles } from "../src/components/commons/styles/globalStyles";
import { Global } from "@emotion/react";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <ApolloSetting>
        <Layout>
          <Component />
        </Layout>
      </ApolloSetting>
    </>
  );
}
