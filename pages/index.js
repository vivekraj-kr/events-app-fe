import Layout from "@/components/Layout";
import Link from "next/link";
import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";
import styled from "styled-components";

const EventsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

const EventsListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HomePage = ({ events }) => {
  return (
    <Layout>
      <EventsListHeader>
        <h2>Upcoming Events</h2>
        {events.data.length > 0 && (
          <Link href="/events">
            <a>View All Events</a>
          </Link>
        )}
      </EventsListHeader>
      {events.data.length === 0 && <h3>No events to show</h3>}
      <EventsList>
        {events.data.map((event) => (
          <EventItem key={event.id} event={event.attributes} />
        ))}
      </EventsList>
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
