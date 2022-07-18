import EventItem from "@/components/EventItem";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledEventList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
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

EventItem.propTypes = {
  /**
   * Events array
   */
  events: PropTypes.array,
};

EventItem.defaultProps = {
  events: [],
};
