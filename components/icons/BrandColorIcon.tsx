"use client";

type BrandColorIconProps = {
  color: string;
  size?: number;
};

export function BrandColorIcon({ color, size = 20 }: BrandColorIconProps) {
  return (
    <div
      className="rounded-full"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
      aria-hidden
    />
  );
}
