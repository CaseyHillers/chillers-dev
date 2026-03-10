export function formatPostDate(date: string, locale = "en-US") {
  const normalizedDate = date.includes("T") ? date : `${date}T00:00:00`;
  return new Date(normalizedDate).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
