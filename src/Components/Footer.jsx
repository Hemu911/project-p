// src/Components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';   // ✔ internal navigation

const Footer = () => (
  <footer className="bg-gray-100 w-[92%] m-auto mt-12 p-8 rounded-2xl">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      {/* Column 1 */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Company</h3>
        <ul className="space-y-2 text-gray-600">
          <li><Link to="/about"  className="hover:underline">About</Link></li>
          <li><Link to="/careers" className="hover:underline">Careers</Link></li>
          <li><Link to="/blog"    className="hover:underline">Blog</Link></li>
        </ul>
      </div>

      {/* Column 2 */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Support</h3>
        <ul className="space-y-2 text-gray-600">
          <li><a href="mailto:support@example.com" className="hover:underline">Help Center</a></li>
          <li><a href="mailto:contact@example.com" className="hover:underline">Contact</a></li>
          <li><a href="/privacy.pdf"               className="hover:underline">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Column 3 */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Community</h3>
        <ul className="space-y-2 text-gray-600">
          <li><a href="https://community.example.com" className="hover:underline">Forums</a></li>
          <li><a href="https://events.example.com"    className="hover:underline">Events</a></li>
          <li><a href="#"                              className="hover:underline">Newsletter</a></li>
        </ul>
      </div>
    </div>

    <div className="mt-8 text-center">
      <p className="text-sm text-gray-500">© 2025 Ghogu Gang. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
