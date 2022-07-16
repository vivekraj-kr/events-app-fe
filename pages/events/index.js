import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import EventList from "@/components/EventList";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: 40px;
  color: #5d6971;
  margin: 0 0 30px;
`;

const EventsPage = ({ events }) => {
  return (
    <Layout>
      <StyledTitle>All events</StyledTitle>
      {events.data.length === 0 && <h3>No events to show</h3>}
      <EventList events={events.data} />
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events?_sort=date:ASC&populate=*`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}

export default EventsPage;
