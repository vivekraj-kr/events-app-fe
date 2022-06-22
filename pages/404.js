import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import Layout from "@/components/Layout";

const NotFound = () => {
  return (
    <Layout title="Page not found">
      <FaExclamationTriangle />
      <h1>Not found</h1>
      <Link href="/">Home</Link>
    </Layout>
  );
};

export default NotFound;
