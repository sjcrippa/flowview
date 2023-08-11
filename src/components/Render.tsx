import { useEffect, useState } from "react"

import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config.js"
import Loading from "./Loading.js";

interface Event {
  id: string;
  target: {
    className: string;
    tagName: string;
  };
  timestamp: string;
  type: string;
  scriptUrl: string;
  user: string;
  ip: string;
  // Otras propiedades relevantes
}

const Render: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [loader, setLoader] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const db_ref = collection(db, 'events');
    getDocs(db_ref)
      .then((resp) => {
        const eventList = resp.docs.map((doc) => {
          const eventData = doc.data() as Event; // Aseguramos el tipo
          const { className, tagName } = eventData.target;
          return { ...eventData, id: doc.id, target: { className, tagName } };
        });
        setEvents(eventList);
        setLoader(true)
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, [db]);


  return (
    <>
      {!loader
        ? <Loading />
        : <main className="container w-full mt-5">
          <h1 className="italic text-xl font-bold text-center">Event list</h1>
          <div className="m-4">

            <ul className="grid grid-cols-1 sm:grid sm:grid-cols-2 gap-3">
              {events.map((event) => (
                <li className="p-2 border border-black rounded shadow-md" key={event.id}>
                  <h2 className="overflow-auto ">Event ID: {event.id}</h2>
                  <p>Event type: {event.type}</p>
                  <p>IP: {event.ip}</p>

                  <ul>
                    {!open
                      ? <button className="text-center" onClick={() => { setOpen(!open) }}>
                        <span className="italic font-semibold text-md">More details</span>
                      </button>
                      : <section className="transition-all duration-500 ease-in-out">
                        <button onClick={() => { setOpen(!open) }}>
                          <span className="italic font-semibold text-md">Show less</span>
                        </button>
                        <h3>Event date: {event.timestamp}</h3>
                        <p>URL: {event.scriptUrl}</p>
                        <p>Username: {event.user}</p>
                        <div className="">
                          <p>Event labels and classes:</p>
                          <p>{event.target.tagName}</p>
                          <p>{event.target.className}</p>
                        </div>
                      </section>
                    }
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </main>
      }
    </>
  )
}

export default Render
