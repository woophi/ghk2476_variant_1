import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: 'calc(100% - 2rem)',
  padding: '1rem',
  bottom: 0,
});

export const appSt = {
  bottomBtn,
};
