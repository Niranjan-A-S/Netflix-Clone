import React from "react";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { BillBoard } from "@/components/home-page/billboard";
import { Navbar } from "@/components/navbar/navbar";

const Home = () => (
  <>
    <Navbar />
    <BillBoard />
  </>
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