import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Blogs = () => {
    return (
      <div className="w-[80%] mx-auto pt-20">
        <div className="flex space-x-2 sm:space-x-4 border rounded-lg shadow-lg p-8 bg-gray-200 mb-12">
          <FaCheckCircle className="text-4xl text-red-500" />
          <div className="space-y-2">
            <p className="text-2xl font-mono text-blue-700">
              What is the difference between SQL and NoSQL ?
            </p>
            <p className=" font-serif text-justify text-xl">
              SQL databases are vertically scalable, while NoSQL databases are horizontally
              scalable. SQL databases are table-based, while NoSQL databases are document,
              key-value, graph, or wide-column stores. SQL databases are better for multi-row
              transactions, while NoSQL is better for unstructured data like documents or JSON.
            </p>
          </div>
        </div>
        <div className="flex space-x-2 sm:space-x-4 border rounded-lg shadow-lg p-8 bg-gray-200 mb-12">
          <FaCheckCircle className="text-4xl text-red-500" />
          <div className="space-y-2">
            <p className="text-2xl font-mono text-blue-700">What is JWT, and how does it work? </p>
            <p className=" font-serif text-justify text-xl">
              JSON Web Token is a proposed Internet standard for creating data with optional
              signature and/or optional encryption whose payload holds JSON that asserts some number
              of claims. The tokens are signed either using a private secret or a public/private
              key. Authentication server verifies the credentials and issues a jwt signed using
              either a secret salt or a private key. User's Client uses the JWT to access protected
              resources by passing the JWT in HTTP Authorization header. Resource server then
              verifies the authenticity of the token using the secret salt/ public key.
            </p>
          </div>
        </div>
        <div className="flex space-x- sm:space-x-4 border rounded-lg shadow-lg p-8 bg-gray-200 mb-12">
          <FaCheckCircle className="text-4xl text-red-500" />
          <div className="space-y-2">
            <p className="text-2xl font-mono text-blue-700">What is JWT, and how does it work? </p>
            <p className=" font-serif text-justify text-xl">
              JSON Web Token is a proposed Internet standard for creating data with optional
              signature and/or optional encryption whose payload holds JSON that asserts some number
              of claims. The tokens are signed either using a private secret or a public/private
              key. Authentication server verifies the credentials and issues a jwt signed using
              either a secret salt or a private key. User's Client uses the JWT to access protected
              resources by passing the JWT in HTTP Authorization header. Resource server then
              verifies the authenticity of the token using the secret salt/ public key.
            </p>
          </div>
        </div>
        <div className="flex space-x- sm:space-x-4 border rounded-lg shadow-lg p-8 bg-gray-200 mb-12">
          <FaCheckCircle className="text-4xl text-red-500" />
          <div className="space-y-2">
            <p className="text-2xl font-mono text-blue-700">
              What is the difference between javascript and NodeJS?
            </p>
            <p className=" font-serif text-justify text-xl">
              JavaScript is a simple programming language that can be used with any browser that has
              the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or
              execution environment for the JavaScript programming language.
            </p>
          </div>
        </div>
        <div className="flex space-x- sm:space-x-4 border rounded-lg shadow-lg p-8 bg-gray-200 mb-20">
          <FaCheckCircle className="text-4xl text-red-500" />
          <div className="space-y-2">
            <p className="text-2xl font-mono text-blue-700">
              What is the difference between javascript and NodeJS?
            </p>
            <p className=" font-serif text-justify text-xl">
              NodeJS receives multiple client requests and places them into EventQueue. NodeJS is
              built with the concept of event-driven architecture. NodeJS has its own EventLoop
              which is an infinite loop that receives requests and processes them.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blogs;