import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `https://car-doctor-server-weld.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem('car-access-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(!data?.error){
          setBookings(data);
        }
      });
  }, [url]);

  const handleConfirm = id => {
    fetch(`https://car-doctor-server-weld.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.modifiedCount){
        const remaining = bookings.filter(booking => booking._id !== id);
        const updated = bookings.find(booking => booking._id === id);
        updated.status = 'confirm';
        const newBookings = [updated, ...remaining]
        setBookings(newBookings);
      }
    })
  }

  const handleDelete = (id) => {
    const proceed = confirm("Are you Sure you want to delete");
    if (proceed) {
      console.log(id);
      fetch(`https://car-doctor-server-weld.vercel.app/bookings/${id}`,
      {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.acknowledged){
            alert('Deleted Successfully')
          }
          const remainingBookings = bookings.filter(booking => booking._id !== id);
          setBookings(remainingBookings)
        });
    }
  };

  return (
    <div className="my-20">
      <h2 className="text-5xl font-bold text-center mb-10">Your Bookings: {bookings.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Service</th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
                bookings.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}></BookingRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
