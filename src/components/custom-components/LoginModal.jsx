import React, { useState } from 'react';
import { XMarkIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';


const LoginModal = ({ showModal, closeModal }) => {
    // State for managing sign-up / sign-in toggle, password visibility, and password fields
    const [isSignUp, setIsSignUp] = useState(true);
    const [showPasswordSignIn, setShowPasswordSignIn] = useState(false);
    const [showPasswordSignUp, setShowPasswordSignUp] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate(); 

    // If modal is not shown, return null (don't render anything)
    if (!showModal) return null;

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if password and confirm password match when signing up
        if (isSignUp && password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        // Proceed with form submission logic here (e.g., API call)
        navigate('/postjob');
        //console.log('Form submitted');
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-[90%] sm:w-[80%] md:w-[600px] lg:w-[700px] p-6 sm:p-8 md:p-10 rounded-lg shadow-lg relative">
                {/* Modal Title */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">
                    {isSignUp ? 'Create an Account to Post a Job' : 'Sign In to Post a Job'}
                </h2>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Form fields for sign-up or sign-in */}
                    {isSignUp ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Name, Email, Phone, and Location fields */}
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-custom-yellow"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-custom-yellow"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="phone">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-custom-yellow"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="location">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-custom-yellow"
                                    placeholder="Enter your location"
                                />
                            </div>
                            
                            {/* Password field for sign-up */}
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="password">
                                      Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPasswordSignUp ? 'text' : 'password'}
                                        id="password"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-custom-yellow"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {/* Toggle password visibility for sign-up */}
                                    <span
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                                        onClick={() => setShowPasswordSignUp(!showPasswordSignUp)}
                                    >
                                        {showPasswordSignUp ? (
                                            <EyeSlashIcon className="w-5 h-5" />
                                        ) : (
                                            <EyeIcon className="w-5 h-5" />
                                        )}
                                    </span>
                                    
                                </div>
                            </div>

                            {/* Confirm Password field */}
                            <div>
                                <label className="block text-gray-700 mb-2" htmlFor="confirm-password">
                                     Confirm Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPasswordSignUp ? 'text' : 'password'}
                                        id="confirm-password"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-custom-yellow"
                                        placeholder="Confirm your password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    {/* Toggle password visibility for confirm password */}
                                    <span
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                                        onClick={() => setShowPasswordSignUp(!showPasswordSignUp)}
                                    >
                                        {showPasswordSignUp ? (
                                            <EyeSlashIcon className="w-5 h-5" />
                                        ) : (
                                            <EyeIcon className="w-5 h-5" />
                                        )}
                                    </span>
                                    
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* Email and Password fields for sign-in */}
                            <div>
                                <label className="block text-gray-700 text-sm sm:text-base mb-1" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-custom-yellow"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="relative">
                                <label className="block text-gray-700 text-sm sm:text-base mb-1" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type={showPasswordSignIn ? 'text' : 'password'}
                                    id="password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-custom-yellow"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {/* Toggle password visibility for sign-in */}
                                <span
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                                    onClick={() => setShowPasswordSignIn(!showPasswordSignIn)}
                                >
                                    {showPasswordSignIn ? (
                                        <EyeSlashIcon className="w-5 h-5" />
                                    ) : (
                                        <EyeIcon className="w-5 h-5" />
                                    )}
                                </span>
                            </div>
                        </>
                    )}

                    {/* Submit button */}
                    <button
                        type="submit"
                        className="w-full bg-custom-yellow text-white py-2 px-4 rounded-lg hover:bg-custom-blue transition duration-300"
                    >
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </button>
                </form>

                {/* Toggle between sign-up and sign-in */}
                <p className="mt-4 text-center text-gray-600">
                    {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                    <span
                        className="text-custom-blue cursor-pointer"
                        onClick={( ) => setIsSignUp(!isSignUp)}
                    >
                        {isSignUp ? 'Sign In' : 'Sign Up'}
                    </span>
                </p>

                {/* Close button for the modal */}
                <div
                    className="absolute top-4 right-4 cursor-pointer"
                    onClick={closeModal}
                >
                    <XMarkIcon className="w-6 h-6 text-gray-600 hover:text-custom-yellow" />
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
