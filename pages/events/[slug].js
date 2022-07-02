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
      {/* <h1>{event.name}</h1> */}
      {/* <Link href={`/events/edit/${event.id}`}>
        <a>Edit event</a>
      </Link>
      <a herf="#" onClick={deleteEvent}>
        Delete
      </a>
      <span>
        {event.dat} at {event.time}
      </span>
      {event.image && (
        <div>
          <Image src={event.image} width={170} height={100} />
        </div>
      )}
      <p>{event.performers}</p>
      <h3>Description</h3>
      <p>{event.description}</p>
      <h3>Venue {event.venue}</h3>
      <p>{event.address}</p>
      <Link href="/events">
        <a>Go back</a>
      </Link> */}
    </Layout>
  );
};

export default EventPage;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events?slug=${slug}`);
  const events = await res.json();
  return {
    props: {
      event: events[0],
    },
  };
}
