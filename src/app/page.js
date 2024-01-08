import Image from "next/image";
import styles from "./page.module.css";
import MapEditor from "./pages/MapEditor";

export default function Home() {
  return (
    <div>
      <div></div>
      <div>
        <MapEditor />
      </div>
    </div>
  );
}
