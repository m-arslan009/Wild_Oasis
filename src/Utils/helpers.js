import { differenceInDays, formatDistance, parseISO } from "date-fns";

export function formatCurrency(val) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(val);
}

export const subtractDate = (d1, d2) => {
  differenceInDays(parseISO(String(d1)), parseISO(String(d2)));
};

export const formatDistanceFromNow = (dateStr) => {
  formatDistance(
    parseISO(String(dateStr), new Date(), {
      addSuffix: true,
    })
      .replace("about ", "")
      .replace("in", "In")
  );
};

export const getToday = function (options = {}) {
  const today = new Date();
};
