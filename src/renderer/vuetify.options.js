import colors from "vuetify/lib/util/colors";

export default {
  breakpoint: {
    mobileBreakpoint: 'xs' // This is equivalent to a value of 960
  },
  theme: {
    dark: true,
    themes: {
      light: {
        primary: colors.green.darken1,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
      dark: {
        primary: colors.green.darken2,
      },
    },
  }
};