import collection from "../../pages/collection/collection";
import ShopActionTypes from "./shop-types";

export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
