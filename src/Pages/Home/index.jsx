import React, { useEffect } from 'react';
import { Skeleton } from '../../Componetns/Skeleton';
import { Beacon } from '../../Componetns/Beacon';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import { TableFilter } from '../../Componetns/TableFilter';

import * as S from './style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [clientTrue, setClientTrue] = useState(localStorage.getItem('client'));


  if (!clientTrue) {
    return <Skeleton />;
  } else {
    return (
      <S.Container>
        <S.SubContainer>
          <h1>
            <SettingsInputAntennaIcon /> {clientTrue}
          </h1>
          <S.Box>
            <Beacon />
          </S.Box>
          <S.Box>
            <TableFilter />
          </S.Box>
        </S.SubContainer>
        <S.FooterTable>
          <TableFilter search={false} />
        </S.FooterTable>
      </S.Container>
    );
  }
};
