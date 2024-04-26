import { useState } from "react";
import Alert from "./Alert";

export type VarianAlerts = "success" | "danger" | "warning";
export type Alert = {
    text: string;
    variant: VarianAlerts;
  };

  export default function useAlert() {
    const [listAlerts, setListAlerts] = useState<Alert[]>([]);
  
    const createAlert = (options: Alert): void => {
      setListAlerts([...listAlerts, options]);
      setTimeout(() => {
        setListAlerts((alert) => alert.slice(1));
      }, 5000);
    };
  
    const alerts = (
      <div >
        {listAlerts.map((alert) => (
          <Alert variant={alert.variant}>{alert.text}</Alert>
        ))}
      </div>
    );
  
    return {
      alerts,
      createAlert
    };
  }