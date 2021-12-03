import type { NextPage } from "next";
import Head from "next/head";
import { Text } from "@chakra-ui/react";
import { Layout } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Unstoppable dApp</title>
        <meta
          name="description"
          content="A simple dApp powered by the unstoppable login"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Text fontSize="3xl">Welcome to the Unstoppable dApp</Text>
        <Text fontSize="lg">
          Login with the Unstoppable Login button in the top right to continue
        </Text>
      </Layout>
    </div>
  );
};

export default Home;
