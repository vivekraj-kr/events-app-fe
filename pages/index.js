import { API_URL } from "@/config/index";
import EventList from "@/components/EventList";
import Layout from "@/components/Layout";
import Link from "next/link";
import styled from "styled-components";

const EventListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled.a`
  cursor: pointer;
  color: #80bbb9;

  &:hover {
    text-decoration: underline;
  }
`;

const HomePage = ({ events }) => {
  return (
    <Layout>
      <EventListHeader>
        <h2>Upcoming Events</h2>
        {events.length > 0 && (
          <Link href="/events">
            <StyledLink>View All Events</StyledLink>
          </Link>
        )}
      </EventListHeader>
      {events.length === 0 && <h3>No events to show</h3>}
      <EventList events={events} />
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `${API_URL}/api/events?_sort=date:ASC&_limit=3&populate=*`
  );
  const eventsData = await res.json();

  const events = eventsData.data.slice(0, 4);

  return {
    props: { events },
    revalidate: 1,
  };
}

export default HomePage;
