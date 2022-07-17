import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";
import Link from "next/link";
import styled from "styled-components";
import useFormattedDate from "@/hooks/useFormattedDate";

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
  height: 400px;
  @media (max-width: 992px) {
    flex: 1 1 400px;
    height: auto;
  }

  @media (max-width: 480px) {
    flex: 1 1 200px;
  }
`;

const StyledEventDetails = styled.div`
  flex: 1 1 40%;
  color: #5d6971;
`;

const StyledLink = styled.a`
  cursor: pointer;
  color: #80bbb9;

  &:hover {
    text-decoration: underline;
  }
`;

const EventPage = ({ event }) => {
  const date = useFormattedDate(event.attributes.date);

  return (
    <Layout>
      <Link href="/events">
        <StyledLink>Go back</StyledLink>
      </Link>
      <StyledTitle>{event.attributes.name}</StyledTitle>
      <StyledEventContainer>
        {event.attributes.video && (
          <StyledVideoContainer>
            <iframe
              width="100%"
              height="100%"
              src={event.attributes.video}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </StyledVideoContainer>
        )}
        <StyledEventDetails>
          <h3>{event.attributes.speakers}</h3>
          <span>
            {date} at {event.attributes.time}
          </span>
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
