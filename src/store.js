import Vue from "vue"
import Vuex from "vuex"
import { THEME } from "./constants"
import theme from './themes'
/*
const theme = {
  red,
  blue,
  primary,
  success
};
*/

const defaultTheme = THEME.success;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    themeName: theme[defaultTheme].themeName,
    primary: theme[defaultTheme].primary,
    secondary: theme[defaultTheme].secondary
  },
  mutations: {
    switchTheme(state, themeName) {
      state.themeName = theme[themeName].themeName;
      state.primary = theme[themeName].primary;
      state.secondary = theme[themeName].secondary;
    }
  },
  actions: {}
});
