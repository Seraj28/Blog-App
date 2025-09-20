// import React from "react";
// import { FaGithub } from "react-icons/fa";
// import { BsYoutube } from "react-icons/bs";
// import { FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <>
//       <footer className="border py-10">
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div className=" text-center md:text-start">
//             <h2 className="text-lg font-semibold mb-4">Products</h2>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   Flutter
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   React
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   Android
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   iOS
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className=" text-center md:text-start">
//             <h2 className="text-lg font-semibold mb-4">Design to code</h2>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   Figma plugin
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   Templates
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className=" text-center md:text-start">
//             <h2 className="text-lg font-semibold mb-4">Comparison</h2>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   DhiWise vs Anima
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   DhiWise vs Appsmith
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   DhiWise vs FlutterFlow
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   DhiWise vs Monday Hero
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   DhiWise vs Retool
//                 </a>
//               </li>

//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   DhiWise vs Bubble
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   DhiWise vs Figma Dev Mode
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className=" text-center md:text-start">
//             <h2 className="text-lg font-semibold mb-4">Company</h2>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   Contact Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   Career
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   Terms of Service
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   Privacy Policy
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//       <div className=" container mx-auto  flex flex-col md:flex-row justify-between items-center">
//         <div className="text-xl font-semibold hidden md:flex">
//           Cilli<span className="text-blue-500 font-bold">Blog</span>
//         </div>
//         <div className="text-gray-400 text-sm hidden md:flex">
//           <p>&copy; 2024 DhiWise PVT. LTD. All rights reserved</p>
//         </div>
//         <div className="mt-4 md:mt-0 flex space-x-4">
//           <a href="#">
//             <FaGithub className="h-6" />
//           </a>
//           <a href="#">
//             <BsYoutube className="h-6" />
//           </a>

//           <a href="#">
//             <FaLinkedin className="h-6" />
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="border-t py-10 bg-gray-900 text-gray-300">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5">
          <div className="text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4 text-white">Products</h2>
            <ul className="space-y-2">
              <li><a href="/flutter" className="hover:text-blue-400">Flutter</a></li>
              <li><a href="/react" className="hover:text-blue-400">React</a></li>
              <li><a href="/android" className="hover:text-blue-400">Android</a></li>
              <li><a href="/ios" className="hover:text-blue-400">iOS</a></li>
            </ul>
          </div>

          <div className="text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4 text-white">Design to Code</h2>
            <ul className="space-y-2">
              <li><a href="/figma-plugin" className="hover:text-blue-400">Figma Plugin</a></li>
              <li><a href="/templates" className="hover:text-blue-400">Templates</a></li>
            </ul>
          </div>

          <div className="text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4 text-white">Comparison</h2>
            <ul className="space-y-2">
              <li><a href="/comparison/anima" className="hover:text-blue-400">CilliBlog vs Anima</a></li>
              <li><a href="/comparison/flutterflow" className="hover:text-blue-400">CilliBlog vs FlutterFlow</a></li>
              <li><a href="/comparison/bubble" className="hover:text-blue-400">CilliBlog vs Bubble</a></li>
            </ul>
          </div>

          <div className="text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4 text-white">Company</h2>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
              <li><a href="/career" className="hover:text-blue-400">Careers</a></li>
              <li><a href="/terms" className="hover:text-blue-400">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-blue-400">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-6 px-5">
        <div className="text-xl font-semibold text-Black hidden md:flex"> 
          Cilli<span className="text-blue-500 font-bold">Blog</span>
        </div>
        <div className="text-gray-400 text-sm text-center md:text-left">
          <p>&copy; 2025 CilliBlog. All rights reserved.</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-6 hover:text-blue-500 transition" />
          </a>
          <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <BsYoutube className="h-6 hover:text-red-500 transition" />
          </a>
          <a href="www.linkedin.com/in/md-s-14aa3127a" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="h-6 hover:text-blue-600 transition" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
