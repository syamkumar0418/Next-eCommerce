import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "eCommerce | Nextjs by Syankumar",
  description: "This is Home for eCommerce  ",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
