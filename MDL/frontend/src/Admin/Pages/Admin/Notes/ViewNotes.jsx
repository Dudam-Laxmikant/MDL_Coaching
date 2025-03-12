import React from 'react';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import { Link } from 'react-router-dom';
import {AiOutlineArrowLeft} from "react-icons/ai"
export const ViewNotes = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#454649]">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="flex flex-1 p-4 sm:p-10 md:p-16 lg:p-20 w-full mt-10">
                <div className="w-full max-w-4xl mx-auto bg-white p-12 rounded-lg shadow-lg border border-yellow-800">
                    {/* Title and Date */}
                    <div className="mb-6 flex flex-col items-center">
                        <h1 className="text-3xl font-bold text-indigo-700 text-center">
                            <b>Utrayan</b>
                        </h1>
                    </div>

                    <div className="w-full flex justify-end">
                        <b className="text-gray-600">12-02-2025</b>
                    </div>

                    <br />
                    {/* Notes Content */}
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
                        officia saepe excepturi beatae soluta cum natus sapiente, magnam
                        aliquam, molestias similique corporis a blanditiis deserunt est ut
                        atque eius eligendi.
                    </p>


                    {/* Signature */}
                    <div className="mt-8 border-t pt-4 text-right">
                        <h2 className="text-lg font-semibold text-gray-800">Principal Signature</h2>
                        <p className="text-gray-700 font-medium">Laxmikant</p>
                        <h6 className="text-gray-500">Hukam</h6>
                    </div>
                </div>
            </div>

            <Link to="/adminhome" className="fixed bottom-6 left-4 text-white bg-green-600 p-3 rounded-full hover:bg-green-700 transition duration-300">
                <AiOutlineArrowLeft size={24} />
            </Link>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ViewNotes;
