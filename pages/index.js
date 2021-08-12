import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg',
        address: "Some address 5, 12345 Some City",
        description: 'This is a first meetup' 
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/2014_Olympiastadion_Munich.jpg',
        address: "Some address 10, 12345 Some City",
        description: 'This is a Second meetup' 
    }
];

function HomePage() {
    return (
        <div>
            <MeetupList meetups={DUMMY_MEETUPS} />
        </div>
    )
}

export default HomePage
