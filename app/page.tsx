import { Button, Input, Card } from "@heroui/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 max-w-7xl mx-auto w-full gap-10">
      {/* Hero Section */}
      <div className="w-full text-center space-y-4 py-20">
        <h1 className="text-5xl font-bold">Find Your Next Great Exchange</h1>
        <p className="text-default-500 text-lg">Trade, buy, and sell with the community.</p>
        <div className="flex max-w-md mx-auto gap-2 mt-6">
          <Input placeholder="Search for items..." className="w-full" />
          <Button variant="primary">Search</Button>
        </div>
      </div>

      {/* Placeholder Grid for Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {[1, 2, 3, 4].map((item) => (
          <Card key={item} className="w-full h-[300px] flex flex-col">
            <div className="font-bold text-lg p-4 pb-2">Item {item}</div>
            <div className="bg-default-100 flex-grow flex items-center justify-center rounded-xl mx-2 mb-2">
              <span className="text-default-400">Image Placeholder</span>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}