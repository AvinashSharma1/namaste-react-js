import React from 'react'
import { RES_CDN_URL } from '../utils/constants'

const ItemList = ({ items }) => {
    console.log('items', items)
    return (
        <div className="">
            {items?.map((item) => (
                <div
                    key={item.card.info.id}
                    className="p-2 m-2 flex justify-between border-b-2 border-gray-300 text-left"
                >
                    <div className="w-9/12">
                        <div className="py-2 flex">
                            <div className="font-semibold text-gray-700 text-base ">
                                {item.card.info.name} -
                            </div>
                            <div className="mx-1 flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="size-6 absolute mt-1"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                >
                                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                                </svg>

                                <span className="mx-3">
                                    {' '}
                                    {item?.card?.info?.defaultPrice / 100 ||
                                        item.card.info.price / 100}
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm">
                            {item.card.info.description}
                        </p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-2 bg-opacity-5 hover:bg-white  mx-16 bottom-1 bg-gray-50 shadow-lg">
                                Add +
                            </button>
                        </div>
                        <img
                            className="w-full"
                            src={RES_CDN_URL + item.card.info.imageId}
                            alt={item.card.info.name}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList
