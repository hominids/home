function Banner() {
    return (
        <div className="flex flex-col mt-44 place-items-center">
            <h1 className="font-body font-bold text-4xl">Welcome, Hominid 👋 </h1>
            <p className="font-body font-medium mx-24 my-5 text-center text-md">
                Contribute where you can! Start with testing the decentralized identity management dashboard. 
            </p>

            <button className="text-base bg-red-500 border-2 border-red-500 text-white rounded-full py-2 px-4 hover:shadow-2xl hover:ring-1 hover:ring-red-500 transition duration-300 font-body">Learn More</button>

            <img src='banner-thumb.png' 
                className="flex mx-5 my-3 py-1 px-2"
            />

        </div>

        /* Product Image */

    )
}

export default Banner
