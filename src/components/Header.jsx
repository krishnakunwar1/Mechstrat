
// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import Logo from "../assets/Logo2.png";

// export default function Header() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const navigation = [
//         { name: 'Home', href: '/home' },
//         { name: 'Leadership', href: '/leadership' },
//         { name: 'Services', href: '/services' },
//         { name: 'Contact', href: '#contact' }
//     ];

//     return (
//         <>
//             {/* Top breadcrumb bar */}




//             {/* Main Header */}
//             <header className="bg-white sticky top-0 z-50">
//                 <div className="container mx-auto px-6 max-w-6xl">
//                     <div className="flex items-center justify-between py-6">
//                         {/* Logo */}
//                         <div className="flex items-center space-x-2">

//                             <img
//                                 src={Logo}
//                                 alt="MECHSTART GLOBAL"
//                                 className="h-20 w-auto object-contain"
//                             />
//                             {/* MG text */}
//                         </div>

//                         {/* Desktop Navigation */}
//                         <nav className="hidden md:flex items-center space-x-10">
//                             {navigation.map((item, index) => (
//                                 <a
//                                     key={item.name}
//                                     href={item.href}
//                                     className={` font-medium text-[14px] flex items-end transition-colors ${index === 0
//                                             ? 'text-[#1695A3] hover:text-teal-700'
//                                             : 'text-[#000000] hover:text-teal-600'
//                                         }`}
//                                 >
//                                     {item.name}
//                                 </a>
//                             ))}
//                         </nav>

//                         {/* Mobile Menu Button */}
//                         <button
//                             onClick={() => setIsMenuOpen(!isMenuOpen)}
//                             className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
//                         >
//                             {isMenuOpen ? (
//                                 <X className="w-6 h-6 text-gray-700" />
//                             ) : (
//                                 <Menu className="w-6 h-6 text-gray-700" />
//                             )}
//                         </button>
//                     </div>

//                     {/* Bottom Border Line */}
//                     <div className="h-px bg-gray-200"></div>
//                 </div>

//                 {/* Mobile Menu */}
//                 {isMenuOpen && (
//                     <div className="md:hidden bg-white border-t border-gray-200">
//                         <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
//                             {navigation.map((item, index) => (
//                                 <a
//                                     key={item.name}
//                                     href={item.href}
//                                     onClick={() => setIsMenuOpen(false)}
//                                     className={`font-medium text-sm transition-colors ${index === 0
//                                             ? 'text-teal-600 hover:text-teal-700'
//                                             : 'text-gray-800 hover:text-teal-600'
//                                         }`}
//                                 >
//                                     {item.name}
//                                 </a>
//                             ))}
//                         </nav>
//                     </div>
//                 )}
//             </header>
//         </>
//     );
// }

import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from "../assets/logo1.png";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false); // Services ड्रॉपडाउन के लिए क्लिक-आधारित स्टेट

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Leadership', href: '/leadership' },
        {
            name: 'Services',
            href: '/services',
            isDropdown: true,
            dropdownItems: [
                { name: 'Manufacturing Companies', href: '/services/Manufacturing' },
                { name: 'AI Solution Providers', href: '/services/AIsolution' },
                { name: 'Technology Solution Providers', href: '/services/Technology' },
            ]
        },
        { name: 'Contact', href: '/contactUs' }
    ];

    // किसी भी क्लिक को हैंडल करने के लिए जो ड्रॉपडाउन के बाहर होता है
    // यह डेस्कटॉप ड्रॉपडाउन को बंद करने के लिए उपयोगी है जब उपयोगकर्ता बाहर क्लिक करता है
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (isServicesDropdownOpen && !event.target.closest('.services-dropdown-container')) {
                setIsServicesDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isServicesDropdownOpen]);

    return (
        <>
            {/* Main Header */}
            <header className="bg-white sticky top-0 z-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex items-center justify-between py-6">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <img
                                src={logo}
                                alt="MECHSTRAT GLOBAL"
                                className="h-28 w-auto object-contain"
                                style={{
                                    imageRendering: "crisp-edges",
                                    filter: "contrast(110%) brightness(105%)",
                                }}
                            />


                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-10">
                            {navigation.map((item, index) => (
                                <div
                                    key={item.name}
                                    className="relative services-dropdown-container" // बाहर क्लिक को पहचानने के लिए क्लास जोड़ी
                                >
                                    {item.isDropdown ? (
                                        <button
                                            onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)} // क्लिक पर ड्रॉपडाउन टॉगल करें
                                            className="flex items-center cursor-pointer font-medium text-[14px] text-[#000000] hover:text-teal-600 transition-colors bg-transparent border-none p-0"
                                        >
                                            {item.name}
                                            <ChevronDown className={`ml-1 h-4 w-4 transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className={`font-medium text-[14px] flex items-end transition-colors ${index === 0
                                                ? 'text-[#1695A3] hover:text-teal-700'
                                                : 'text-[#000000] hover:text-teal-600'
                                                }`}
                                        >
                                            {item.name}
                                        </a>
                                    )}

                                    {/* Services Dropdown Menu */}
                                    {item.isDropdown && isServicesDropdownOpen && (
                                        <div
                                            className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-10"
                                        >
                                            {item.dropdownItems.map(dropdownItem => (
                                                <a
                                                    key={dropdownItem.name}
                                                    href={dropdownItem.href}
                                                    onClick={() => setIsServicesDropdownOpen(false)} // ड्रॉपडाउन आइटम पर क्लिक करने पर बंद करें
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    {dropdownItem.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6 text-gray-700" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-700" />
                            )}
                        </button>
                    </div>

                    {/* Bottom Border Line */}
                    <div className="h-px bg-gray-200"></div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                            {navigation.map((item, index) => (
                                <div key={item.name}>
                                    {item.isDropdown ? (
                                        <>
                                            <button
                                                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)} // मोबाइल में क्लिक पर ड्रॉपडाउन टॉगल करें
                                                className="flex items-center justify-between w-full font-medium text-sm text-gray-800 hover:text-teal-600 transition-colors py-2 bg-transparent border-none p-0"
                                            >
                                                {item.name}
                                                <ChevronDown className={`ml-1 h-4 w-4 transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                            {isServicesDropdownOpen && (
                                                <div className="ml-4 flex flex-col space-y-2 mt-2">
                                                    {item.dropdownItems.map(dropdownItem => (
                                                        <a
                                                            key={dropdownItem.name}
                                                            href={dropdownItem.href}
                                                            onClick={() => {
                                                                setIsMenuOpen(false); // मोबाइल मेनू बंद करें
                                                                setIsServicesDropdownOpen(false); // मोबाइल ड्रॉपडाउन बंद करें
                                                            }}
                                                            className="block text-sm text-gray-600 hover:text-teal-600"
                                                        >
                                                            {dropdownItem.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <a
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`font-medium text-sm transition-colors ${index === 0
                                                ? 'text-teal-600 hover:text-teal-700'
                                                : 'text-gray-800 hover:text-teal-600'
                                                }`}
                                        >
                                            {item.name}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
}