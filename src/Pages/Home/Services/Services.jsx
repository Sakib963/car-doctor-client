import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="mb-20">
            <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-[#FF3811]">Services</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="w-2/4 mx-auto">The majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;