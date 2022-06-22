import Link from "next/link";
import Layout from "./Layout";

const NotFound = () => {
  return (
    <Layout>
      <h1>Not found</h1>
      <Link href="/">Home</Link>
    </Layout>
  );
};

export default NotFound;
