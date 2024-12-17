import React from "react"; 
import { Metadata } from "next";
import QuickViewModal from "@/components/Common/QuickViewModal";

export const metadata: Metadata = {
  title: "Shop Details Page | eCommerce Nextjs by Syankumar",
  description: "This is Shop Details Page for eCommerce  ",
  // other metadata
};

const ShopDetailsPage = () => {
  return (
    <main>
      <QuickViewModal />
    </main>
  );
};
export default ShopDetailsPage;
