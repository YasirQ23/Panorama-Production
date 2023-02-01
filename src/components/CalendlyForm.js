import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function App() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("floatingButton", { calLink: "everything/30min" });
      cal("ui", {
        styles: {
          branding: { brandColor: "#000000" }
        }
      });
    })();
  }, []);

  return;
}