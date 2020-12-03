import _ from "underscore-node";

export const mergeArrayObjectsById = (arr1, arr2) => {
  return _.map(arr1, function (item) {
    return _.extend(item, _.findWhere(arr2, { id: item.id }));
  });
};
