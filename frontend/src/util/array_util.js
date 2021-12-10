export const sortAlphabetically = (arrayOfObjects, propertyToSortBy) =>
  arrayOfObjects.sort((a, b) =>
    a[propertyToSortBy][0].toLowerCase() > b[propertyToSortBy][0].toLowerCase() ? 1 : -1
  );

export const sortAlphabeticallyWord = (arrayOfObjects, propertyToSortBy) =>
  arrayOfObjects.sort((a, b) => {
    console.log(arrayOfObjects, propertyToSortBy)
    // a[propertyToSortBy][0].toLowerCase() > b[propertyToSortBy][0].toLowerCase() ? 1 : -1

  });

export const sortByDate = (arrayOfObjects, propertyToSortBy) =>
  arrayOfObjects.sort((a, b) =>
    new Date(a[propertyToSortBy]) - new Date(b[propertyToSortBy])
  )