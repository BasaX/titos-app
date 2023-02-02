import axios from "axios";import dummyCatFood from "./dummy-data/catFood.json";
import dummyCatGames from "./dummy-data/catGames.json";
import dummyCatCuddles from "./dummy-data/catCuddles.json";
import dummyCatAllInfo from "./dummy-data/catAllInfo.json";

const get_cat_food = async () => {
  try {
    return dummyCatFood;
  } catch (error) {
    return null;
  }
};

const get_cat_games = async () => {
  try {
    return dummyCatGames;
  } catch (error) {
    return null;
  }
};

const get_cat_cuddles = async () => {
  try {
    return dummyCatCuddles;
  } catch (error) {
    return null;
  }
};

const get_cat_all_info = () => {
  try {
    return dummyCatAllInfo;
  } catch (error) {
    return null;
  }
};

export { get_cat_food, get_cat_games, get_cat_cuddles, get_cat_all_info };
