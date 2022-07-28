import { AnimeSeason } from "shared/lib/graphql";

export const getSeasonInfo = () => {
  const now = new Date();

  const currentYear = now.getFullYear();
  let currentSeason;
  switch (now.getMonth()) {
    case 0:
    case 1:
    case 2:
      currentSeason = AnimeSeason.Winter;
      break;
    case 3:
    case 4:
    case 5:
      currentSeason = AnimeSeason.Spring;
      break;
    case 6:
    case 7:
    case 8:
      currentSeason = AnimeSeason.Summer;
      break;
    case 9:
    case 10:
    case 11:
      currentSeason = AnimeSeason.Fall;
      break;
  }

  const { nextSeason, nextYear } = getNextSeason(currentSeason, currentYear);

  return {
    currentSeason,
    currentYear,
    nextSeason,
    nextYear
  };
};

const getNextSeason = (season: AnimeSeason, year: number) => {
  switch (season) {
    case AnimeSeason.Winter:
      return { nextSeason: AnimeSeason.Spring, nextYear: year + 1 };
    case AnimeSeason.Spring:
      return { nextSeason: AnimeSeason.Summer, nextYear: year };
    case AnimeSeason.Summer:
      return { nextSeason: AnimeSeason.Fall, nextYear: year };
    case AnimeSeason.Fall:
      return { nextSeason: AnimeSeason.Winter, nextYear: year };
  }
};
