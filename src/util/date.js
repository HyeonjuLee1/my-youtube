import {
  format,
  // register
} from "timeago.js";

// import KoLocale from "timeage.js/lib/lang/ko";

// register("ko", KoLocale);

export function formatAgo(date, lang = "en_US") {
  return format(date, lang);
}
