import React, { createRef } from 'react';
import Pdf from "react-to-pdf";

const Blog = () => {
    const ref = createRef();
    return (
        <section className='max-w-screen-lg  mx-auto pt-40 pb-20'>
            <h2 className="px-4 pb-6 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 mb-4">
                Some valuable Q&A:
            </h2>
            <div className='grid gap-8 p-4' ref={ref}>
                <div className='grid gap-2'>
                    <h1 className='text-2xl font-semibold'>1. Tell us the differences between uncontrolled and controlled components.</h1>
                    <p className='text-gray-800'>An uncontrolled components state are managed by itself internally. This is not controlled or managed by React. On the other hand controlled components state or value are managed by React.</p>
                </div>
                <div className='grid gap-2'>
                    <h1 className='text-2xl font-semibold'>2. How to validate React props using PropTypes?</h1>
                    <p className='text-gray-800'>'propTypes' is a package for validate the props that are passed to a component.</p>
                    <p className='text-gray-800'>There are many validators has for validate a props. Here are some example: </p>
                    <ul className='text-gray-800 grid gap-1'>
                        <li><span className='font-semibold'>'PropTypes.array':</span> Validates that the prop is an array.</li>
                        <li><span className='font-semibold'>'PropTypes.bool':</span> Validates that the prop is a boolean.</li>
                        <li><span className='font-semibold'>'PropTypes.func':</span> Validates that the prop is a function.</li>
                        <li><span className='font-semibold'>'PropTypes.number':</span> Validates that the prop is a number.</li>
                        <li><span className='font-semibold'>'PropTypes.object':</span> Validates that the prop is an object.</li>
                        <li><span className='font-semibold'>'PropTypes.string':</span> Validates that the prop is a string.</li>
                    </ul>
                </div>
                <div className='grid gap-2'>
                    <h1 className='text-2xl font-semibold'>3. Tell us the difference between nodejs and express js.</h1>
                    <p className='text=gray-800'>Node.js is a JavaScript runtime that allows developers to use JavaScript on the server-side. On the other hand Express.js is a web application framework built on top of Node.js.</p>
                    <p className='text=gray-800'>Some differences between Node.js and Express.js:</p>
                    <ul className='text-gray-800 grid gap-1'>
                        <li><span className='font-semibold'>Purpose:</span> Node.js provides a runtime environment for running JavaScript code outside of the browser, while Express.js is a web application framework built on top of Node.js.</li>
                        <li><span className='font-semibold'>Functionality:</span> Node.js provides the core functionality for building scalable and high-performance applications, while Express.js provides additional features and tools for building web applications and APIs.</li>
                        <li><span className='font-semibold'>Middleware:</span> Node.js doesn't have built-in middleware support, while Express.js provides a middleware system that allows developers to add functionality to their application's request-response cycle.</li>
                    </ul>
                </div>
                <div className='grid gap-2'>
                    <h1 className='text-2xl font-semibold'>4. What is a custom hook, and why will you create a custom hook?</h1>
                    <p className='text=gray-800'>In React, Custom hook is a function that starts with the "use" and allows to extract reusable logic from a component. Custom hooks are useful for sharing code between components and keeping code organized and maintainable. That's why we will create and use custom hook.</p>
                </div>
            </div>

            <div className='mt-8 px-4 w-full'>
                <Pdf targetRef={ref} filename="blog.pdf" x={.5} y={.5}>
                    {({ toPdf }) => <button className='btn-secondary' onClick={toPdf}>
                        Download Pdf
                    </button>}
                </Pdf>
            </div>
        </section>
    );
};

export default Blog;