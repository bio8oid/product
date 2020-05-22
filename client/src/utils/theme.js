import { colors } from './colors';

export const theme = {
  colors,
  responsiveImg: 'height: 100%; width: 100%; background-size: cover',
  font: {
    gloria: "font-family: 'Gloria Hallelujah'",
    indie: "font-family: 'Indie Flower'",
    size1: "font-size: 1rem",
    size2: "font-size: 2rem",
    size3: "font-size: 3rem",
    size4: "font-size: 4rem",
    size5: "font-size: 5rem",
  },
  flex: {
    centered: "display: flex; justify-content: center; align-items: center",
    centeredColumn: "display: flex; flex-direction: column; justify-content: center; align-items: center"
  },
  media: {
    cloud: '@media (max-width: 1524px)',
    desktop: '@media (max-width: 1048px)',
    tabletPro: '@media (max-width: 900px)',
    tablet: '@media (max-width: 728px)',
    mobile: '@media (max-width: 576px)',
    iphone5: '@media (max-width: 360px)',
  },
}
