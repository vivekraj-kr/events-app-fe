import EventItem from "@/components/EventItem";
import styled from "styled-components";

const StyledEventList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

const EventList = ({ events }) => {
  return (
    <StyledEventList>
      {events.map((event) => (
        <EventItem key={event.id} event={event.attributes} />
      ))}
    </StyledEventList>
  );
};

export default EventList;
