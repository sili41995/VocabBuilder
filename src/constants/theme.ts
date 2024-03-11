declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  // colors: {
  //   backdropColor: string;
  //   primaryFontColor: string;
  //   secondaryColor: string;
  //   primaryColor: string;
  //   titleColor: string;
  //   sectionColor: string;
  //   iconColor: string;
  //   descriptionColor: string;
  //   otherColor: string;
  //   accentColor: string;
  //   outlineColor: string;
  //   greenColor: string;
  //   whiteColor: string;
  // };
  // fontFamily: {
  //   primaryFontFamily: string;
  // };
  // fontWeight: {
  //   primaryFontWeight: number;
  //   secondaryFontWeight: number;
  //   otherFontWeight: number;
  // };
  // fontSize: {
  //   formTitle: number;
  //   primary: number;
  //   secondary: number;
  //   other: number;
  // };
  // padding: {
  //   containerPadding: number;
  //   primarySectionPadding: number;
  //   secondarySectionPadding: number;
  // };
  // containerWidth: {
  //   primaryDesktopSize: 1184;
  //   otherDesktopSize: 1312;
  // };
  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
}

const theme: ITheme = {
  // colors: {
  //   outlineColor: 'rgba(18, 20, 23, 0.1)',
  //   backdropColor: 'rgba(18, 20, 23, 0.50)',
  //   primaryColor: '#F4C550',
  //   secondaryColor: '#fbe9ba',
  //   otherColor: 'rgba(18, 20, 23, 0.2)',
  //   iconColor: '#ffc531',
  //   titleColor: '#8a8a89',
  //   sectionColor: '#f8f8f8',
  //   greenColor: '#38cd3e',
  //   descriptionColor: 'rgba(18, 20, 23, 0.8)',
  //   primaryFontColor: '#121417',
  //   accentColor: '#0b44cd',
  //   whiteColor: '#FFFFFF',
  // },
  // fontFamily: {
  //   primaryFontFamily: 'Roboto',
  // },
  // fontWeight: {
  //   primaryFontWeight: 500,
  //   secondaryFontWeight: 400,
  //   otherFontWeight: 700,
  // },
  // fontSize: {
  //   formTitle: 40,
  //   primary: 16,
  //   secondary: 18,
  //   other: 14,
  // },
  // padding: {
  //   containerPadding: 16,
  //   primarySectionPadding: 20,
  //   secondarySectionPadding: 96,
  // },
  // containerWidth: {
  //   primaryDesktopSize: 1184,
  //   otherDesktopSize: 1312,
  // },
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
