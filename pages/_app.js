import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [show , setShow] = useState(true);

  useEffect(() => {
    if (window.location.pathname.includes('/user')) {
      setShow(false);
    }
  } , [show]);
  return (
    <div>
      {show && <Navbar />}
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
