import { Card, CardContent } from "@/components/ui/card";

export function ContentArea() {
  return (
    <Card className="mt-4">
      <CardContent className="h-64 bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">No data available</p>
      </CardContent>
    </Card>
  );
}
