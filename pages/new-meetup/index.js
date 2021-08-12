// our-domain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm"

function NewMeetup() {
    function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData);
    }

    return (
        <div>
        {/* the (onAddMeetup) prop below, was sent from 
        below, from the NewMeetupForm.js component */}
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </div>
    )
}

export default NewMeetup
