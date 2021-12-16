export const sortAlphabetically = (arrayOfObjects, propertyToSortBy) =>
  arrayOfObjects.sort((a, b) =>
    a[propertyToSortBy][0].toLowerCase() > b[propertyToSortBy][0].toLowerCase() ? 1 : -1
  );

// most recent first
export const sortByDate = (arrayOfObjects, propertyToSortBy) =>
  arrayOfObjects.sort((a, b) =>
    new Date(b[propertyToSortBy]) - new Date(a[propertyToSortBy])
  )