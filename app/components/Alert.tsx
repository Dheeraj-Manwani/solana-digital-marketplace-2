import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function AlertWarning() {
  return (
    <Alert variant="warning" className="">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        This is the actual product zip, It will be sent via mail to the user
        once he pays for it. Do not share it anywhere else.
      </AlertDescription>
    </Alert>
  );
}
