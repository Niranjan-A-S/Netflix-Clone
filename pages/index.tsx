import { BillBoard } from "@/components/home-page/billboard";
import { InfoModal } from "@/components/home-page/info-modal";
import { MovieListContainer } from "@/components/home-page/movie-list";
import { Navbar } from "@/components/navbar/navbar";
import { InfoModalProvider } from "@/context/info-model-context";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import React from "react";

const Home = () => (
  <InfoModalProvider >
    <InfoModal />
    <Navbar />
    <BillBoard />
    <MovieListContainer />
  </InfoModalProvider>
);

export default React.memo(Home);

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};