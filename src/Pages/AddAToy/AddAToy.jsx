
import { useLocation, useNavigate } from "react-router-dom";



const AddAToy = () => {

    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location);
    const from = '/'


    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const weight = form.weight.value;
        const category_id = form.category_id.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const total_selling = form.total_selling.value;
        const description = form.description.value;

        const newToy = {
            name, image, weight, category_id, price, rating, total_selling, description

        }
        console.log(newToy);

        fetch('https://anime-toy-emporium-server.vercel.app/alltoys', {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                alert('Toy added successfully')
                navigate(from, { replace: true })
                }
            })

    }

    return (
        <div>
            <h2 className="text-center text-2xl font-bold">
                Add a New Toy
            </h2>
            <form onSubmit={handleAddToy}>
                <div className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name='image' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Weight</span>
                            </label>
                            <input type="text" name="weight" placeholder="eg; 250g" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category ID</span>
                            </label>
                            <input type="number" placeholder="eg; 1, 2 or 3" className="input input-bordered" name='category_id' />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' className="input input-bordered placeholder:eg; 29.99" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name='rating' className="input input-bordered" placeholder="eg; 4.8" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Total Selling</span>
                            </label>
                            <input type="number" name='total_selling' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-gradient-to-r from-purple-500 to-blue-500 text-white" type="submit" value="Add" />
                    </div>
                </div>
            </form>



        </div>
    );
};

export default AddAToy;