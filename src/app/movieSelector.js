export const getTrendingState =
  () =>
  ({movie: {trending}}) =>
    trending;

export const getUpcomingState =
  () =>
  ({movie: {upcoming}}) =>
    upcoming;

export const getTopRatedState =
  () =>
  ({movie: {topRated}}) =>
    topRated;
