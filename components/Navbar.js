'use client';

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return <nav className="bg-gray-800 p-4">
        <div className="w-11/12 mx-auto flex items-center justify-between">
            <div>
                <Link
                    href="/"
                    className="text-white text-lg font-bold hover:text-gray-300"
                >
                    Home
                </Link>
            </div>
        </div>
    </nav>;
};

export default Navbar;
