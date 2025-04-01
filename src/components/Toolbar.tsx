import { Button } from "@/components/ui/button";
import { RefreshCcw, Printer, Save, Mail, PlusCircle, X } from "lucide-react";

export function Toolbar() {
  return (
    <div className="bg-blue-700 text-white p-2 flex space-x-2">
      <Button variant="outline" className="text-white border-white">
        <PlusCircle size={16} className="mr-1" /> Create
      </Button>
      <Button variant="outline" className="text-white border-white">
        <Save size={16} className="mr-1" /> Save
      </Button>
      <Button variant="outline" className="text-white border-white">
        <Printer size={16} className="mr-1" /> Print
      </Button>
      <Button variant="outline" className="text-white border-white">
        <Mail size={16} className="mr-1" /> Email
      </Button>
      <Button variant="outline" className="text-white border-white">
        <RefreshCcw size={16} className="mr-1" /> Refresh
      </Button>
      <Button variant="outline" className="text-white border-white">
        <X size={16} className="mr-1" /> Close
      </Button>
    </div>
  );
}
