import { FaExclamationTriangle } from "react-icons/fa";
import Layout from "@/components/Layout";
import Link from "next/link";

const NotFound = () => {
  return (
    <Layout title="Page not found">
      <FaExclamationTriangle />
      <h1>Not found</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </Layout>
  );
};

export default NotFound;
