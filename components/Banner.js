function Banner() {
    return (
        <div className="flex flex-col mt-44 place-items-center">
            <h1 className="font-body font-bold text-4xl">Welcome, Hominid 👋 </h1>
            <p className="font-body font-medium mx-24 my-5 text-center text-md">
                Contribute wherever and however you can! 
            </p>

            <button className="text-base bg-red-500 border-2 border-red-500 text-white rounded-full py-2 px-4 hover:shadow-2xl hover:ring-1 hover:ring-red-500 transition duration-300 font-body mb-10">Learn More</button>

        </div>

        /* Product Image <img src='banner-thumb.png' 
                className="flex mx-5 my-3 py-1 px-2"
            /> */

    )
}

export default Banner
