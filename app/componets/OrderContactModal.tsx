"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type OrderContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  description: string;
};

export function OrderContactModal({
  isOpen,
  onClose,
  description,
}: OrderContactModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-gray-900">Call to Place Your Order</h2>
        <p className="mt-3 text-gray-600">{description}</p>
        <div className="mt-5 rounded-xl border border-orange-200 bg-orange-50 p-4 text-center">
          <p className="text-sm font-medium text-gray-600">Order Support Number</p>
          <a
            href="tel:9990867867"
            className="mt-2 block text-3xl font-bold tracking-wide text-orange-600"
          >
            9990867867
          </a>
        </div>
        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 font-medium text-gray-700 hover:bg-gray-50"
          >
            Close
          </button>
          <a
            href="tel:9990867867"
            className="flex-1 rounded-lg bg-orange-600 px-4 py-3 text-center font-medium text-white hover:bg-orange-700"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}
