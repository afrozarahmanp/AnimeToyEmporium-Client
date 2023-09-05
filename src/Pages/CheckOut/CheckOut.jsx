import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const CheckOut = () => {

    const toys = useLoaderData();

    const { image, price,name  } = toys;
    const { user } = useContext(AuthContext);

    const handleBookService = event => {
        event.preventDefault();

        const form = event.target;
        const username = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const order = {
            custonerName: username,
            email,
            date,
            image,
            toy: name,
            price,
        }
        console.log(order);


        fetch('http://localhost:3000/ordertoys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    alert('Order placed successfully')
                }
            })
    }


        return (
            <div>
                <h2 className="text-center text-2xl font-bold">
                    Add to order: {name}
                </h2>
                <form onSubmit={handleBookService}>
                    <div className="card-body">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={user?.displayName} placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name='date' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="price" defaultValue={'$' + price} className="input input-bordered" />

                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-gradient-to-r from-purple-500 to-blue-500 text-white" type="submit" value="Order Confirm" />
                        </div>
                    </div>
                </form>



            </div>

        );
    };

export default CheckOut;