"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Buildingcomponent from "../Buildingcomponent";
import Image from "next/image";
import Link from "next/link";

const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cart`;

interface ApiBuilding {
  id: number;
  place: string;
  rooms: string;
  squrefeet: string;
  price: string | null;
  proparty: string | null;
}

interface Building {
  id: number;
  place: string;
  rooms: string;
  squarefeet: string;
  price: string | null;
  proparty: string | undefined;
}

export default function CartComponent() {
  const [items, setItems] = useState<Building[]>([]);
  const [error, setError] = useState<string | null>(null);

  const pics = [
    "https://ecbmbqcpywczvkskaxyc.supabase.co/storage/v1/object/public/dreamhome//3d-rendering-house-model%20(1)%201.png",
    "https://ecbmbqcpywczvkskaxyc.supabase.co/storage/v1/object/public/dreamhome//3d-rendering-house-model%20(3)%201.png",
    "https://ecbmbqcpywczvkskaxyc.supabase.co/storage/v1/object/public/dreamhome//3d-view-house-model%201.png",
  ];

  useEffect(() => {
    async function fetchCart() {
      try {
        const response = await axios.get<{ data: ApiBuilding[] }>(API_URL);
        const { data } = response.data;

        const mappedItems: Building[] = data.map((item: ApiBuilding) => {
          let squarefeet = item.squrefeet;
          if (squarefeet === "2BHK") {
            squarefeet = "2 BHK";
          } else if (!isNaN(parseFloat(squarefeet.replace(",", "")))) {
            squarefeet = `${squarefeet} SQFT`;
          } else {
            squarefeet = "Unknown";
          }

          return {
            id: item.id,
            place: item.place.trim(),
            rooms: item.rooms.trim(),
            squarefeet,
            price: item.price,
            proparty: item.proparty ?? undefined,
          };
        });

        setItems(mappedItems);
      } catch (error) {
        console.error("Error fetching cart data:", error);
        setError("Failed to load cart data. Please try again later.");
      }
    }

    fetchCart();
  }, []);

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-600 text-xl font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FEF7F2] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#2B1B12] text-center mb-12 tracking-tight">
          Your Dream Rentals
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div
                key={item.id}
                className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative">
                  <Image
                    src={pics[index % pics.length]}
                    alt={`Property in ${item.place}`}
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 text-[#2B1B12] transition duration-300" />
                </div>
                <div className="p-6">
                  <Buildingcomponent
                    place={item.place}
                    rooms={item.rooms}
                    squarefeet={item.squarefeet}
                    proparty={item.proparty}
                  />
                  <div className="mt-6 flex space-x-4">
                    <Link
                      href={"https://www.whatsapp.com/"}
                      target="_blank"
                      className="flex-1 bg-[#2B1B12] p-2 text-white py-2 rounded-lg text-sm font-medium text-center"
                    >
                      Query
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-lg font-medium col-span-full text-center py-12">
              Your cart is empty. Start exploring properties!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}