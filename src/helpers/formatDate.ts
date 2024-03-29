export default function formatDate(dateString: string): string {
  const dateObj = new Date(dateString);
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  const year = String(dateObj.getFullYear()).slice(-2);

  return `${month}-${day}-${year}`;
}
