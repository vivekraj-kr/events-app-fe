import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import useFormattedDate from "@/hooks/useFormattedDate";

const StyledEventItem = styled.div``;

const StyledEventItemDetails = styled.div`
  padding-top: 10px;
`;

const StyledEventitemTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 16px;
`;

const StyledEventitemDate = styled.div`
  font-size: 14px;
  color: #5e6b73;
  margin-bottom: 5px;
`;

const StyledEventitemSpeakers = styled.div`
  font-size: 16px;
  color: #5e6b73;
`;

const EventItem = ({ event }) => {
  const date = useFormattedDate(event.date);
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
            alt={event.name}
          />
          <StyledEventItemDetails>
            <StyledEventitemTitle>{event.name}</StyledEventitemTitle>
            <StyledEventitemDate>
              {date} at {event.time}
            </StyledEventitemDate>
            <StyledEventitemSpeakers>{event.speakers}</StyledEventitemSpeakers>
          </StyledEventItemDetails>
        </a>
      </Link>
    </StyledEventItem>
  );
};

export default EventItem;
