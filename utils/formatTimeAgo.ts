// utils/formatTimeAgo.ts

export function formatTimeAgo(timestamp: string): string {
  const diff = (Date.now() - new Date(timestamp).getTime()) / 1000;

  if (diff < 60) return `${Math.floor(diff)}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  return `${Math.floor(diff / 3600)}h ago`;
}
