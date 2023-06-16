import React from 'react';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import * as S from './Style';

export const Beacon = () => {
  return (
    <S.Container>
      <div>
        <div class="pulse-icon">
          <div class="icon-wrap">
            <SettingsInputAntennaIcon />
          </div>
          <div class="elements">
            <div class="circle circle-outer"></div>
            <div class="circle circle-inner"></div>
            <div class="pulse pulse-1"></div>
            <div class="pulse pulse-2"></div>
            <div class="pulse pulse-3"></div>
          </div>
        </div>
      </div>
    </S.Container>
  );
};
