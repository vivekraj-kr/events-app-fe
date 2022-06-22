import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const EventPage = () => {
  const router = useRouter();
  console.log(router);
  return (
    <Layout>
      <h1>My events </h1>
      <button onClick={() => router.push("/")}>Click</button>
    </Layout>
  );
};

export default EventPage;
