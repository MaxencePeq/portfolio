/**
 * Turn boolean into text for dark/light mode
 * @param mode : Boolean 1 : darkmode 0 : lightmode
 * @returns
 */
export function getMode(mode: boolean) {
  if (mode) {
    return "dark";
  } else {
    return "light";
  }
}

