export const theme = {
  buttons: {
    circle: {
      borderRadius: "10rem",
      height: "2rem",
      width: "2rem",
      display: "flex",
      alignItems: "center",
      alignSelf: "center",
    },
    primary:{
      display: "flex",
      alignItems: "center",
      alignSelf: "center",
    }
  },
};

export type Buttons = keyof typeof theme.buttons;