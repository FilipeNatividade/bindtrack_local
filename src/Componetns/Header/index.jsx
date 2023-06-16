import React from 'react';
import * as S from './style';
import { Dropbox } from '../Dropbox';

export const Header = () => {
  return (
    <S.HeaderContain>
      <h1>BindTrack</h1>
      <Dropbox />
    </S.HeaderContain>
  );
};
