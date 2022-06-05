import type { GetServerSideProps, NextPage } from "next";

const Node: NextPage = () => {
  return <div>Hello</div>;
};

export const getServerSideProps: GetServerSideProps<any> = async ({
  req,
  res,
}) => {
  return { props: {} };
};

export default Node;
