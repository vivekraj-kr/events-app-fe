import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const StyledEventItem = styled.div`
  padding: 15px 0;
  border-bottom: solid 1px #ccc;
`;
const StyledEventName = styled.div``;

const EventItem = ({ event }) => {
  console.log(event);
  return (
    <StyledEventItem>
      <div>
        <Image
          src={
            event.image.data.attributes.url
              ? event.image.data.attributes.url
              : "/images/dj_default.jpg"
          }
          width={170}
          height={100}
        />
      </div>
      <StyledEventName>
        <span>
          {event.date} {event.time}
        </span>
        <h3>{event.name}</h3>
      </StyledEventName>
      <div>
        <Link href={`/events/${event.slug}`}>
          <a>Details</a>
        </Link>
      </div>
    </StyledEventItem>
  );
};

export default EventItem;
