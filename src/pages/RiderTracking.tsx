import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Toolbar } from "../components/Toolbar";
import { SearchSection } from "../components/SearchSection";
import { ContentArea } from "../components/ContentArea";

export default function RiderTracking() {
  const [autoRefresh, setAutoRefresh] = useState<boolean>(true);
  return (
    <div className="min-h-screen bg-blue-100 p-4">
      <Navbar />
      <Toolbar />
      <SearchSection autoRefresh={autoRefresh} setAutoRefresh={setAutoRefresh} />
     <ContentArea />
    </div>
  );
}
