import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { IoIosPlayCircle } from "react-icons/io";

function About() {

    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <div className="grid justify-items-center my-12 mx-5">
                <h4 className="text-xs text-red-500 uppercase font-bold my-3 h-2 text-center">About</h4>

                <h2 className="text-2xl font-body font-bold text-center my-5">Self-sovereign Identity 🥷</h2>

                <div className="">
                    <div className="flex">
                        <p className="text-5xl p-3 m-3">🌞</p>

                        <div className="grid content-center">
                            <h3 className="text-lg font-body font-bold">
                                Dashboard
                            </h3>
                            <p>
                                Manage your identity in one simple interface.
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <p className="text-5xl p-3 m-3">🪙</p>

                        <div className="grid content-center">
                            <h3 className="text-lg font-body font-bold">
                                Basic Income
                            </h3>
                            <p>
                                Stake your identity and earn 员 tokens.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* video - use odysee video! can probably use https://yarnpkg.com/package/react-modal-video */}
            <div className="grid justify-items-center mt-10 mb-10">
                <div className="flex items-center justify-center box-content relative bg-video-thumbnail bg-contain z-0 w-96 h-52 rounded" >
                    <IoIosPlayCircle onClick={()=> setOpen(true)} 
                        className="block object-contain z-50 text-white opacity-60 hover:opacity-80 cursor-pointer fill-current h-24 w-24"
                    />
                </div>
            </div>

            
            <ModalVideo 
                channel='custom'
                isOpen={isOpen}
                url="https://odysee.com/$/embed/Welcome-to-the-Lobby!-(Mallsoft---Vaporwave---Electronic-Mix)/c279de54813056a442b5dca237b2fcd41bebea3f?r=8DZKKeGsqoE1q7pRnu5zoLTMBvjsnJKh"
                onClose={() => setOpen(false)}
            />
        </div>
    )
}

export default About
