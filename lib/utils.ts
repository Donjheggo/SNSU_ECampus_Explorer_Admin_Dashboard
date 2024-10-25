import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const FormatDateTime = (date: Date) => {
  return `${date.toLocaleTimeString()} - ${date.toDateString()}`;
};

export const FormatDateTimeAgo = (date: Date) => {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  // If less than 1 minute, show "just now"
  if (diffInMinutes < 1) {
    return "just now";
  }

  // If within the last 24 hours
  if (diffInHours < 24) {
    return diffInHours === 0
      ? `${diffInMinutes} minutes ago`
      : `${diffInHours} hours ago`;
  }

  // If within the last 7 days
  if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  }

  // If more than 7 days, show the date in "MMM DD, YYYY" format
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
