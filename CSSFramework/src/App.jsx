import React from 'react';
import './index.css';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-red-400 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white text-xl font-bold mr-8">Kalvium</div>
          <nav className="space-x-4">
            <a href="#about" className="text-grey hover:underline">About Us</a>
            <a href="#contacts" className="text-grey hover:underline">Contacts</a>
            <a href="#courses" className="text-grey hover:underline">Courses</a>
          </nav>
        </div>
        <button className="border border-white text-white py-1 px-3 rounded">Login</button>
      </header>

      <main className="flex-grow p-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 mx-20">  
          Button One
        </button>

        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4 mx-20"> 
          <strong className="font-bold">Alert!</strong>
          <span className="block sm:inline"> This is awesome!</span>
        </div>

        <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-4">
          <div className="flex items-center p-4">
            <img className="w-16 h-16" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="Logo" />
            <div className="ml-4">
              <div className="text-xl font-bold">Kalvium Store</div>
              <p className="text-gray-600">You have a new course!</p>
            </div>
          </div>
        </div>

        <footer className="bg-gray-200 text-center py-4">
          <strong className="font-bold">© 2021 Copyright: Kalvium</strong>
        </footer>
      </main>
    </div>
  );
}

export default App;
