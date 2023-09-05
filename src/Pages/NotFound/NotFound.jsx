
import img from '../../assets/404/404.webp';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <img src={img} alt="Image Description" />
        </div>
    );
};

export default NotFound;