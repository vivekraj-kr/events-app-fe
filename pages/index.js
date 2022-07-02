import Layout from "@/components/Layout";
import Link from "next/link";
import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";

const HomePage = ({ events }) => {
  console.log(events);
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.data.length === 0 && <h3>No events to show</h3>}

      {events.data.map((event) => (
        <EventItem key={event.id} event={event.attributes} />
      ))}

      {events.data.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View All Events</a>
        </Link>
      )}
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `${API_URL}/api/events?_sort=date:ASC&_limit=3&populate=*`
  );
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}

export default HomePage;
