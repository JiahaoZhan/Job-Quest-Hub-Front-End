import React from "react";

export const FAQ = () => {
    return (
        <>
            <section id="faq">
                <div className="container mx-auto">
                    <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="max-w-lg px-6 mx-auto text-center text-graishBlue">
                        Here are some of our FAQs. If you have any other questions you'd like
                        answered please feel free to email us.
                    </p>
                </div>
            </section>
            <section id="faq-accordion">
                {/* <!-- Main Container --> */}
                <div className="container mx-auto px-6 mb-32">
                    {/* <!-- Accordion Container --> */}
                    <div className="max-w-2xl m-8 mx-auto overflow-hidden">
                        {/* <!-- Tab 1 --> */}
                        <div className="py-1 border-b outline-none group" tabIndex={1}>
                            {/* <!-- Tab Flex Container --> */}
                            <div
                                className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease"
                            >
                                {/* <!-- Tab Title --> */}
                                <div
                                    className="transition duration-500 ease group-hover:text-red-500"
                                >
                                    What is Bookmark?
                                </div>
                                {/* <!-- Arrow --> */}
                                <div
                                    className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="3"
                                            d="M1 1l8 8 8-8"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* <!-- Tab Inner Content --> */}
                            <div
                                className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease"
                            >
                                <p className="py-2 text-justify text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                                    repellat amet doloribus consequuntur eos similique provident
                                    tempora voluptates iure quia fuga dicta voluptatibus culpa
                                    mollitia recusandae delectus id suscipit labore?
                                </p>
                            </div>
                        </div>

                        {/* <!-- Tab 2 --> */}
                        <div className="py-1 border-b outline-none group" tabIndex={2}>
                            {/* <!-- Tab Flex Container --> */}
                            <div
                                className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease"
                            >
                                {/* <!-- Tab Title --> */}
                                <div
                                    className="transition duration-500 ease group-hover:text-red-500"
                                >
                                    How can I request a new browser?
                                </div>
                                {/* <!-- Arrow --> */}
                                <div
                                    className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="3"
                                            d="M1 1l8 8 8-8"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* <!-- Tab Inner Content --> */}
                            <div
                                className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease"
                            >
                                <p className="py-2 text-justify text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                                    repellat amet doloribus consequuntur eos similique provident
                                    tempora voluptates iure quia fuga dicta voluptatibus culpa
                                    mollitia recusandae delectus id suscipit labore?
                                </p>
                            </div>
                        </div>

                        {/* <!-- Tab 3 --> */}
                        <div className="py-1 border-b outline-none group" tabIndex={3}>
                            {/* <!-- Tab Flex Container --> */}
                            <div
                                className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease"
                            >
                                {/* <!-- Tab Title --> */}
                                <div
                                    className="transition duration-500 ease group-hover:text-red-500"
                                >
                                    Is ther a mobile app?
                                </div>
                                {/* <!-- Arrow --> */}
                                <div
                                    className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="3"
                                            d="M1 1l8 8 8-8"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* <!-- Tab Inner Content --> */}
                            <div
                                className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease"
                            >
                                <p className="py-2 text-justify text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                                    repellat amet doloribus consequuntur eos similique provident
                                    tempora voluptates iure quia fuga dicta voluptatibus culpa
                                    mollitia recusandae delectus id suscipit labore?
                                </p>
                            </div>
                        </div>

                        {/* <!-- Tab 4 --> */}
                        <div className="py-1 border-b outline-none group" tabIndex={4}>
                            {/* <!-- Tab Flex Container --> */}
                            <div
                                className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease"
                            >
                                {/* <!-- Tab Title --> */}
                                <div
                                    className="transition duration-500 ease group-hover:text-red-500"
                                >
                                    What about other Chromium browsers
                                </div>
                                {/* <!-- Arrow --> */}
                                <div
                                    className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="3"
                                            d="M1 1l8 8 8-8"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* <!-- Tab Inner Content --> */}
                            <div
                                className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease"
                            >
                                <p className="py-2 text-justify text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                                    repellat amet doloribus consequuntur eos similique provident
                                    tempora voluptates iure quia fuga dicta voluptatibus culpa
                                    mollitia recusandae delectus id suscipit labore?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
