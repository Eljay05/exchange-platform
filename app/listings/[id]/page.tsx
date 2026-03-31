import { Button, Card } from "@heroui/react";

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="max-w-5xl mx-auto p-10 w-full grid md:grid-cols-2 gap-10">
      {/* Image Gallery Stub */}
      <div className="bg-default-100 rounded-xl h-[400px] flex items-center justify-center">
        <p className="text-default-400">High-Res Image Gallery</p>
      </div>

      {/* Listing Details */}
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold">Vintage Mechanical Keyboard</h1>
          <p className="text-default-500 mt-2">Listing ID: {params.id}</p>
        </div>
        
        <Card className="overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Estimated Value: $150</h2>
            <p className="text-default-600 mb-6">
              Perfect condition. Looking to exchange for modern wireless peripherals or audio gear.
            </p>
            <Button variant="primary" className="w-full">
              Make an Offer
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}