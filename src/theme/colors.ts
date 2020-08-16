import Color from 'color';

export const PRIMARY = '#2599FB';
export const SECONDARY = '#07D17D';
export const BORDER = '#AAAAAA';
export const TEXT = '#404040';
export const TEXT_LIGHT = '#FFFFFF';
export const BACKGROUND = '#E3E3E3';

export const lighten = (color: string) => Color(color).lighten(0.2).toString();
export const darken = (color: string) => Color(color).darken(0.2).toString();
