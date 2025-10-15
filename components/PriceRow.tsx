import React from "react";

export type Offer = {
  vendor: string;
  sqmPrice: number;
  totalPrice: number;
  url?: string;
  badge?: "🟩" | "🟨" | "🟦" | "🟥" | "⬛";
};

export default function PriceRow({ offer }: { offer: Offer; index: number }) {
  return (
    <tr className="border-t border-white/10">
      <td className="py-3 font-medium whitespace-nowrap">{offer.badge} {offer.vendor}</td>
      <td className="py-3 text-right">{offer.sqmPrice.toLocaleString("cs-CZ")} Kč/m²</td>
      <td className="py-3 text-right">{offer.totalPrice.toLocaleString("cs-CZ")} Kč</td>
      <td className="py-3 text-right">
        {offer.url ? <a href={offer.url} target="_blank" rel="noreferrer" className="text-brand-orange underline">Odkaz</a> : <span className="opacity-50">—</span>}
      </td>
    </tr>
  );
}
