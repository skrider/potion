import type { GetServerSideProps, NextPage } from "next";
import { AppNode } from "types";

interface NodePageProps {
  name: string;
}

const NodePage: NextPage<NodePageProps> = ({ name }) => {
  return <div>{name}</div>;
};

export const getServerSideProps: GetServerSideProps<NodePageProps> = async ({
  resolvedUrl,
}) => {
  return { props: { name: resolvedUrl } };
};

export default NodePage;
