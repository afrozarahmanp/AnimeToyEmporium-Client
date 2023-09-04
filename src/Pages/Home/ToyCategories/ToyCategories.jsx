import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const ToyCategories = () => {
    const [activeTab, setActiveTab] = useState("scale");
    const [toyData, setToyData] = useState([]);

    // Create a mapping of category IDs to category names
    const categoryMapping = {
        1: "scale",
        2: "nendoroid",
        3: "figma",
    };

    // Fetch toy data from toys.json when the component mounts
    useEffect(() => {
        // Replace 'toys.json' with the actual path to your JSON file
        fetch("toys.json")
            .then((response) => response.json())
            .then((data) => setToyData(data))
            .catch((error) => console.error("Error fetching toy data:", error));
    }, []);

    // Function to handle tab clicks
    const handleTabClick = (category) => {
        setActiveTab(category);
    };

    // Filter toy data based on the active tab (category name)
    const filteredData = toyData.filter(
        (item) => categoryMapping[item.category_id] === activeTab
    );

    return (
        <div className="container mx-auto mt-8">
            {/* Tabs */}
            <div className="flex justify-center">
                {Object.values(categoryMapping).map((category) => (
                    <button
                        key={category}
                        className={`tab-button ${activeTab === category
                                ? "active-tab text-white bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-md "
                                : "text-white  bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-md m-2"
                            }`}
                        onClick={() => handleTabClick(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)} Figures
                    </button>
                ))}
            </div>

            {/* Display toy data based on the active tab */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredData.map((toy) => (
                    <div className="card lg:card-side bg-base-100 shadow-xl" key={toy.id}>
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
                                <button className="btn bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 md:px-4 py-2 rounded-lg">
                                    Add to Cart <FaShoppingCart />
                                </button>
                                <button className="btn bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 md:px-4 py-2 rounded-lg">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToyCategories;
