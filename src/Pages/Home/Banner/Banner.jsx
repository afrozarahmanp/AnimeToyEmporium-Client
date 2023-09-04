import banner from '../../../assets/Banner/Figma-Figures.jpg'

const Banner = () => {
    return (
        <div className="relative h-600 ">

            <img src={banner} className="w-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 opacity-80 text-white">
                <h1 className="text-4xl font-semibold mb-4">Welcome to AnimeToyEmporium</h1>
                <p className="text-lg">Where Anime Dreams Come to Life!</p>
                <p className="text-lg mt-4">
                    <span role="img" aria-label="star emoji" className="text-2xl">
                        🌟
                    </span>{' '}
                    Explore Our Vast Collection of Anime Toys and Collectibles{' '}
                    <span role="img" aria-label="star emoji" className="text-2xl">
                        🌟
                    </span>

                </p>
               <button className="mt-3 btn btn-primary bg-[#16154d]">All Toys</button>
            </div>


        </div>
    );
};

export default Banner;