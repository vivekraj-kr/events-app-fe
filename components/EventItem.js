import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const StyledEventItem = styled.div`
  padding: 15px 0;
`;

const StyledEventName = styled.div``;

const EventItem = ({ event }) => {
  console.log(event);
  return (
    <StyledEventItem>
      <Link href={`/events/${event.slug}`}>
        <a>
          <Image
            src={
              event.image.data.attributes.url
                ? event.image.data.attributes.url
                : "/images/dj_default.jpg"
            }
            width={500}
            height={280}
          />
          <StyledEventName>
            <h3>{event.name}</h3>
            <div>
              {new Date(event.date).toLocaleDateString("en-US")} at {event.time}
            </div>
            <div>{event.speakers}</div>
          </StyledEventName>
        </a>
      </Link>
    </StyledEventItem>
  );
};

export default EventItem;
