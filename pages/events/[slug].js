import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styled from "styled-components";

const EventPage = ({ event }) => {
  const StyledTitle = styled.h1`
    font-size: 40px;
    color: #5d6971;
  `;

  const StyledEventContainer = styled.div`
    display: flex;
    gap: 30px;

    @media (max-width: 992px) {
      flex-direction: column;
    }
  `;
  const StyledVideoContainer = styled.div`
    flex: 1 1 60%;
  `;
  const StyledEventDetails = styled.div`
    flex: 1 1 40%;
    color: #5d6971;
  `;

  return (
    <Layout>
      <Link href="/events">
        <a>Go back</a>
      </Link>
      <StyledTitle>{event.attributes.name}</StyledTitle>
      <StyledEventContainer>
        {event.attributes.video && (
          <StyledVideoContainer>
            <iframe
              width="100%"
              height="400"
              src={event.attributes.video}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </StyledVideoContainer>
        )}
        <StyledEventDetails>
          <h3>{event.attributes.speakers}</h3>
          <span>{event.attributes.time}</span>
          <p>{event.attributes.description}</p>
          <span>Venue: {event.attributes.venue}</span>
          <p>Address: {event.attributes.address}</p>
        </StyledEventDetails>
      </StyledEventContainer>
    </Layout>
  );
};

export default EventPage;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events?filters[slug]=${slug}`);
  const events = await res.json();

  return {
    props: {
      event: events.data[0],
    },
  };
}
