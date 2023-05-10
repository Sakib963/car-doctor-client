const Service = ({ service }) => {
  const { title, img, price } = service;
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
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;