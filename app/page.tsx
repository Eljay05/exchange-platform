// app/page.tsx
import { Button, Input, Card } from "@heroui/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full max-w-7xl mx-auto px-6 py-10 gap-10">
      
      {/* Search Section */}
      <section className="w-full flex justify-center mt-4">
        <div className="flex w-full max-w-2xl gap-2">
          <Input 
            placeholder="Search listings..." 
            className="w-full"
          />
          <Button variant="primary" className="px-6 font-medium">
            Search
          </Button>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="w-full flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-default-800">Recent Listings</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Card key={item} className="w-full flex flex-col border border-default-200 shadow-sm rounded-lg overflow-hidden">
              
              {/* Image Container */}
              <div className="aspect-square bg-default-100 flex items-center justify-center border-b border-default-200">
                <span className="text-default-400 text-sm">Image {item}</span>
              </div>
              
              {/* Item Details */}
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-medium text-base line-clamp-1">Listing Title #{item}</h3>
                <p className="text-sm text-default-500 line-clamp-2">
                  Brief description of the item goes here.
                </p>
                <div className="flex justify-between items-center mt-2 pt-3 border-t border-default-100">
                  <span className="font-medium text-sm">$150</span>
                  <Link href={`/listings/${item}`}>
                    <Button size="sm" variant="secondary">View</Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

    </main>
  );
}