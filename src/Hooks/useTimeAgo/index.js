const DAY_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];
const getDateDiff = (timestamp) => {
  const now = Date.now();
  const elapsed = (timestamp - now) / 1000;

  for (const [unit, secondsInUnit] of DAY_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit == "second") {
      const value = Math.floor(elapsed / secondsInUnit);
      return { value, unit };
    }
  }
};

export default function useTimeAgo(timestamp, lang) {
  const { value, unit } = getDateDiff(timestamp);

  const rtf = new Intl.RelativeTimeFormat(lang, {
    style: "short",
  });

  if (unit == "day" && value > 30) {
    const normalizedCreatedAt = new Intl.DateTimeFormat(lang).format(timestamp);
    return normalizedCreatedAt;
  }
  return rtf.format(value, unit);
}
