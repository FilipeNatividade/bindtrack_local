import React, { useEffect } from 'react';
import { Skeleton } from '../../Componetns/Skeleton';
import { Beacon } from '../../Componetns/Beacon';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import { TableFilter } from '../../Componetns/TableFilter';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

export const Home = () => {
  const [clientTrue, setClientTrue] = useState(localStorage.getItem('client'));
  const [openFooter, setOpenfooter] = useState(true);

  if (!clientTrue) {
    return <Skeleton />;
  } else {
    return (
      <S.Container>
        <S.SubContainer openFooter={openFooter}>
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
        <S.FooterTable openFooter={openFooter}>
          <button
            className="collapseButton"
            onClick={() => setOpenfooter(!openFooter)}
          >
            {openFooter ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </button>
          <div className="tableBox">
            {openFooter && <TableFilter search={false} />}
          </div>
        </S.FooterTable>
      </S.Container>
    );
  }
};
