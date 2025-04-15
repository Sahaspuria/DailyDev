import moment from "moment";

// export function timeAgo(dateInput) {
//   const date = new Date(dateInput);
//   const diffSecs = Math.floor((Date.now() - date) / 1000);

//   if (diffSecs < 60) return "just now";
//   if (diffSecs < 3600) return `${Math.floor(diffSecs / 60)} mins ago`;
//   if (diffSecs < 86400)
//     return `${Math.floor(diffSecs / 3600)} hour${
//       Math.floor(diffSecs / 3600) > 1 ? "s" : ""
//     } ago`;

//   // Show formatted date if > 24 hours
//   return date.toLocaleDateString(undefined, {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   });
// }

export const timeAgo = (inputDate) => {
  const now = moment();
  const date = moment(inputDate);
  const diffInHours = now.diff(date, "hours");

  if (diffInHours >= 24) {
    return date.format("DD/MM/YYYY, h:mm A"); // Example: Apr 14, 2025, 3:45 PM
  }

  return date.fromNow(); // Example: 2 hours ago
};

export const sortedByNewest = (list) => {
  return list.sort((a, b) => new Date(a.date) - new Date(b.date));
};

export const filterOnlyToday = (items) => {
  const sortedArr = sortedByNewest(items);
  return sortedArr.filter((item) => moment(item.date).isSame(moment(), "day"));
};
