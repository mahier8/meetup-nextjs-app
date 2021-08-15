import MeetupList from "../components/meetups/MeetupList";
// import { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/2014_Olympiastadion_Munich.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a Second meetup",
  },
];

function HomePage(props) {
  //   const [loadedMeetups, setLoadedMeetups] = useState([]);

  //   useEffect(() => {
  //     // here we send a http request and fetch data

  //     // once the http request is complete we will call
  //     // setLoadedMeetups() and set the meetups that we
  //     // fetched from the server as the meetups for this
  //     // component
  //     setLoadedMeetups(DUMMY_MEETUPS);
  //   }, []);

  // ***********************
  // basically becasue of getStaticProps() we no longer
  // need the two hooks
  // ***********************

  // we now get the data through props
  return <MeetupList meetups={props.meetups} />;
}

// static generation (data fetching for pre rendering)
// only works in your page files, not component files
export async function getStaticProps() {
  // here you can fetch data from an API for example
  // after you fecth data using getStaticProps() you
  // have to return an object, usually called props
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
