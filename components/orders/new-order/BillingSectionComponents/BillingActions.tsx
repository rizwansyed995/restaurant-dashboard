"use client";

import UniversalButton from "@/components/buttons/UniversalButton";

export default function BillingActions() {
    return (
        <div className="p-2 border-t bg-white flex gap-2 text-xs">
            <UniversalButton className="flex-1 py-2 text-xs" label="Discount" variant="neutral"  />
            <UniversalButton className="flex-1 py-2" label="Cash" variant="neutral" />
            <UniversalButton className="flex-1 py-2" label="Checkout" variant="primary" />
        </div>
    );
}
