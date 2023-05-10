import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const BookService = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  console.log(service);

  const {user} = useContext(AuthContext);

  const handleBookService = event => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const date = form.date.value;
    const email = user.email;
    const message = form.message.value;

    const booking = {
        customerName: name,
        email,
        date,
        img,
        service_id: _id,
        service: title,
        price: price,
        message
    }

    console.log(booking)

    fetch(`http://localhost:5000/bookings/`, {
        method: 'POST',
        headers: {"content-type": "application/json"},
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.acknowledged){
            alert('Booking Successful')
            form.reset();
        }
    })
  }

  return (
    <div className="my-20 card bg-base-100 shadow-xl p-10 border space-y-5">
      <h2 className="text-center text-3xl font-semibold">Book Service: <span className="text-[#FF3811]">{title}</span></h2>
      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              required
              defaultValue={user?.displayName}
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              required
              name="date"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={`$${price}`}
              readOnly
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="text"
              name="email"
              readOnly
              defaultValue={user?.email}
              placeholder="Your Email"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control">
            <label className="label">
              <span className="label-text">Your Message</span>
            </label>
            <textarea name="message" placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
          </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            value="Confirm Order"
            className="btn bg-[#FF3811] border-none"
          />
        </div>
      </form>
      <div className=""></div>
    </div>
  );
};

export default BookService;
