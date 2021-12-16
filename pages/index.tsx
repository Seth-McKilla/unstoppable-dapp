import type { NextPage } from "next";
import Head from "next/head";
import { Text } from "@chakra-ui/react";
import { Layout } from "../components";
import useSWR from "swr";
import fetcher from "../utils/fetcher";

const Home: NextPage = () => {
  const uid = "placeholder_uid";

  const { data, error } = useSWR(`/api/test?uid=${uid}`, fetcher);

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
        <Text>{`UID (from Python): ${error ? error : data?.uid}`}</Text>
      </Layout>
    </div>
  );
};

export default Home;
