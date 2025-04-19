const Contact = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Contact us page</h1>
            <p className="text-lg text-center mt-4">
                For inquiries, please reach out to us at
            </p>
            <div className="flex flex-col w-3/12 text-center m-auto mt-4">
                <input
                    type="text"
                    className="border-black p-2 m-2 rounded-md bg-gray-100"
                    placeholder="Enter your name"
                />
                <input
                    type="text"
                    className="border-black p-2 m-2 bg-gray-100 rounded-md"
                    placeholder="Enter your email"
                />
                <input
                    type="text"
                    className="border-black p-2 m-2 bg-gray-100 rounded-md"
                    placeholder="Enter your message"
                />
                <button className="border-black p-2 m-2 bg-gray-100 rounded-md">
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Contact
