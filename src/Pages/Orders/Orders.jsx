import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import OrderRow from "./OrderRow";


const Orders = () => {

    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);


    const url = `http://localhost:3000/ordertoys?email=${user?.email}`;
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
                        order= {order}
                        ></OrderRow>)

                   }
                </tbody>
               


            </table>
        </div>
    </div>
    );
};

export default Orders;