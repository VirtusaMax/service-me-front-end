import React, { useState } from 'react';
import { XMarkIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

const LoginModal = ({ showModal, closeModal }) => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-120 p-6 rounded-lg shadow-lg relative">
                <h2 className="text-2xl font-bold mb-4">
                    {isSignUp ? 'Create an account to post a job' : 'Sign In to post job'}
                </h2>
                <form>
                    {!isSignUp && (
                        <>
                            <div className="mb-4">
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
                            <div className="mb-4 relative">
                                <label className="block text-gray-700 mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-custom-yellow"
                                    placeholder="Enter your password"
                                />
                                <span
                                    className="absolute right-3 top-9 cursor-pointer text-gray-500"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeSlashIcon className="w-5 h-5" />
                                    ) : (
                                        <EyeIcon className="w-5 h-5" />
                                    )}
                                </span>
                            </div>
                        </>
                    )}
                    {isSignUp && (
                        <>
                            <div className="mb-4">
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
                            <div className="mb-4">
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
                            <div className="mb-4 relative">
                                <label className="block text-gray-700 mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-custom-yellow"
                                    placeholder="Enter your password"
                                />
                                <span
                                    className="absolute right-3 top-9 cursor-pointer text-gray-500"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeSlashIcon className="w-5 h-5" />
                                    ) : (
                                        <EyeIcon className="w-5 h-5" />
                                    )}
                                </span>
                            </div>
                            <div className="mb-4 relative">
                                <label
                                    className="block text-gray-700 mb-2"
                                    htmlFor="confirm-password"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="confirm-password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-custom-yellow"
                                    placeholder="Confirm your password"
                                />
                                <span
                                    className="absolute right-3 top-9 cursor-pointer text-gray-500"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeSlashIcon className="w-5 h-5" />
                                    ) : (
                                        <EyeIcon className="w-5 h-5" />
                                    )}
                                </span>
                            </div>
                        </>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-custom-yellow text-white py-2 px-4 rounded-lg hover:bg-custom-blue"
                    >
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                    <span
                        className="text-custom-blue cursor-pointer"
                        onClick={() => setIsSignUp(!isSignUp)}
                    >
                        {isSignUp ? 'Sign In' : 'Sign Up'}
                    </span>
                </p>
                <div
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={closeModal}
                >
                    <XMarkIcon className="w-6 h-6 text-gray-600 hover:text-custom-yellow" />
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
