import { Button, Input, Card } from "@heroui/react";

export default function CreateListingPage() {
  return (
    <main className="max-w-3xl mx-auto p-10 w-full">
      <h1 className="text-3xl font-bold mb-6">Create a New Listing</h1>
      <Card className="p-4">
        <div className="flex flex-col gap-6 p-4">
          <div className="space-y-1">
            <label className="text-sm font-medium">Title</label>
            <Input placeholder="What are you offering?" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Description</label>
            <Input placeholder="Describe the item condition, history, etc." />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Estimated Value ($)</label>
            <Input placeholder="0.00" type="number" />
          </div>
          
          <div className="flex justify-end gap-4 mt-4">
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">Publish Listing</Button>
          </div>
        </div>
      </Card>
    </main>
  );
}