import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "@chakra-ui/react";

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

      <Container>
        <h1>Welcome to the Unstoppable dApp</h1>
      </Container>
    </div>
  );
};

export default Home;
