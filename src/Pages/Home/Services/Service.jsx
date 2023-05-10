import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id,title, img, price } = service;
  return (
    <div className="card border bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-[#FF3811] font-bold">Price: ${price}</p>
        <div className="card-actions flex justify-end">
          <Link to={`/book/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
