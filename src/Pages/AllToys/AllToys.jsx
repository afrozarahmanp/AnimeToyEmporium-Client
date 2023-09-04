import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


const AllToys = () => {

    const [toys, setToys] = useState([]);

    useEffect(()=>{
        fetch('toys.json')
        .then(res => res.json())
        .then(data => setToys(data));
    },[])

    return (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {toys.map((toy) => (
                    <div className="card lg:card-side bg-base-100 shadow-xl" key={toy._id}>
                        <figure>
                            <img
                                src={toy.image}
                                alt={toy.name}
                                className="w-full md:h-72 lg:h-80 object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h3 className="card-title">{toy.name}</h3>
                            <p>Weight: {toy.weight}</p>
                            <p>Price: ${toy.price.toFixed(2)}</p>
                            <p>Rating: {toy.rating}</p>
                            <p>Total Selling: {toy.total_selling}</p>
                            <div className="flex justify-between lg:flex-col lg:space-y-2">
                                <button className="btn bg-gradient-to-r from-purple-500 to-blue-400 text-white px-2 md:px-4 py-2 rounded-lg">
                                    Add to Cart <FaShoppingCart />
                                </button>
                                <Link to={`/alltoys/${toy._id}`}>
                                    <button className="btn bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 md:px-4 py-2 rounded-lg">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    );
};

export default AllToys;