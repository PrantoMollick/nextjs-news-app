import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {
  return (
    <MeetupList meetups={props.meetups} />
  );
};

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     //fetch data from an api
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },

//     }
// }


export async function getStaticProps() {
  const client = await MongoClient.connect('mongodb+srv://pranto:1y1lYALHhbGFI5ry@cluster0.q0s4p.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();
  console.log(meetups);
  client.close();
    //fetch data from an api
    return {
        props: {
            meetups: meetups.map(meetup => ({
              title: meetup.title, 
              address: meetup.address,
              image: meetup.image, 
              id: meetup._id.toString(),
            }))
        }, 
        revalidate: 1
    };
}


export default HomePage;
