'use client';

import AdForm from "@/components/AdForm";

const locationDefault = {
  lat: -6.2,
  lng: 106.816666,
}

export default function NewAdPage() {
  return (
    <AdForm defaultLocation={locationDefault} />
  );
}
