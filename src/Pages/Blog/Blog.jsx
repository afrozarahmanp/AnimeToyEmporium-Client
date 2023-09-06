

const Blog = () => {
    return (
        <div className="space-y-5 mb-40">
            <div className="card  bg-base-100 shadow-xl w-full ">
                <div className="card-body">
                    <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p>Access tokens and refresh tokens serve to authenticate users on a web application. An access token functions like a temporary password, granting users limited access for a brief period. Meanwhile, a refresh token is utilized to obtain a new access token once the current one expires. Safeguarding both tokens is crucial, and they should be securely stored on the user's device, for instance, in a cookie or local storage. Furthermore, it's essential to employ HTTPS to ensure the tokens remain confidential during usage.</p>

                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl w-full">
                <div className="card-body">
                    <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
                    <p>SQL and NoSQL databases diverge in structure and usage. SQL employs tables with predefined schemas, whereas NoSQL offers diverse storage options like documents and key-value pairs. SQL is preferred for intricate data relationships and consistent transaction handling. In contrast, NoSQL excels in scalability and adaptability for managing evolving data structures.</p>

                </div>
            </div>
            <div className="card bg-base-100 shadow-xl w-full">
                <div className="card-body">
                    <h2 className="card-title">What is express js? What is Nest JS?</h2>
                    <p>Express.js is a widely-used web framework for Node.js that simplifies web application and API development. It presents an uncomplicated interface for handling HTTP requests and responses, along with middleware for common tasks such as logging and authentication. Express.js enables the creation of scalable web applications in JavaScript.

                        Nest.js, built on top of Express.js, introduces a modular architecture, dependency injection, and TypeScript support. This combination offers enhanced structure and maintainability, making it suitable for large-scale applications.</p>

                </div>
            </div>
            <div className="card bg-base-100 shadow-xl w-full">
                <div className="card-body">
                    <h2 className="card-title">What is MongoDB aggregate and how does it work?</h2>
                    <p>MongoDB's aggregate is a powerful tool for computing and retrieving data based on specific criteria. It operates by applying a series of stages, each representing a distinct operation or transformation on the input dataset. These operations can include filtering, grouping, sorting, and calculating aggregates like sums or averages. By executing these operations sequentially, aggregate allows for intricate data analysis and manipulation, providing flexibility for complex queries on MongoDB collections.</p>

                </div>
            </div>
        </div>
    );
};

export default Blog;