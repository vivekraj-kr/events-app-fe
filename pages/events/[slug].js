import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

const EventPage = ({ event }) => {
  console.log(event);
  const deleteEvent = (e) => {
    console.log("delete");
  };

  return (
    <Layout>
      <h1>Event</h1>
      <h1>{event.attributes.name}</h1>
      <Link href={`/events/edit/${event.id}`}>
        <a>Edit event</a>
      </Link>
      <a herf="#" onClick={deleteEvent}>
        Delete
      </a>
      <span>
        {event.attributes.date} at {event.attributes.time}
      </span>
      {event.attributes.video && (
        <div>
          <iframe
            width="1136"
            height="639"
            src="https://www.youtube.com/embed/VD108ccVDSY"
            title="Una Kravetz - Calculating Color: Dynamic Theming with CSS Variables Clarity 2020"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <p>{event.attributes.speakers}</p>
      <h3>Description</h3>
      <p>{event.attributes.description}</p>
      <h3>Venue {event.attributes.venue}</h3>
      <p>{event.attributes.address}</p>
      <Link href="/events">
        <a>Go back</a>
      </Link>
    </Layout>
  );
};

export default EventPage;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events?slug=${slug}`);
  const events = await res.json();

  return {
    props: {
      event: events.data[0],
    },
  };
}
