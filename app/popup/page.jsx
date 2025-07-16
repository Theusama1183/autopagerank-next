'use client';
import { useState } from "react";
import AutoPageRankModal from "../components/AutoPageRankModal";

export default function MainComponent() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Show Pricing Popup
      </button>

      {showModal && <AutoPageRankModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
