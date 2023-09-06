import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import OrderRow from "./OrderRow";


const Orders = () => {

    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete?')
        if (proceed) {
            fetch(`https://anime-toy-emporium-server.vercel.app/ordertoys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully!');
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining)
                    }
                })

        }
    }

    const handleOrderConfirm = id => {
        fetch(`https://anime-toy-emporium-server.vercel.app/ordertoys/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = orders.filter(order => order._id !== id);
                    const updated = orders.find(order => order._id === id);
                    updated.status = 'confirm'
                    const newOrder = [updated, ...remaining];
                    setOrders(newOrder);
                }
            })
    }


    const url = `https://anime-toy-emporium-server.vercel.app/ordertoys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [url])

    return (
        <div>
            <h2>Your Orders: {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Order</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleOrderConfirm={handleOrderConfirm}
                            ></OrderRow>)

                        }
                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Orders;