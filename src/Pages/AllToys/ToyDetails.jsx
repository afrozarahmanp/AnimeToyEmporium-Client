import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import '@smastrom/react-rating/style.css';
import './ToyDetails.css'; // Import your custom CSS file for styles
import { FaShoppingCart } from "react-icons/fa";

const ToyDetails = () => {
    const toyDetails = useLoaderData();
    console.log("ToyDetails Data:", toyDetails);

    const { image, name, weight, price, rating, total_selling, description } = toyDetails;

    return (
        <div className="center-card mt-10 mb-10">
            <div className="card lg:card-side md:card-side bg-base-100 shadow-xl" style={{ width: '75%' }}>
                <figure><img src={image} alt={name} style={{ width: '100%' }} /></figure>
                <div className="card-body space-y-6">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>Weight: {weight}</p>
                    </div>
                    <p>{description}</p>

                    <p className="text-xl font-bold">${price} </p>
                    <div className="flex"><Rating style={{ maxWidth: 75 }} value={Math.round(rating || 0)} readOnly />
                        <span className="ms-2">{rating}</span>
                    </div>

                    <p>Total Selling: {total_selling}</p>
                    <div className="card-actions justify-end">
                    <button className="btn bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 md:px-4 py-2 rounded-lg">
                                    Add to Cart <FaShoppingCart />
                                </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;
