import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import SettingsIcon from '@mui/icons-material/Settings';
import { Controller, useForm } from 'react-hook-form';
import { Switch } from '@mui/material';
import * as S from './style';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

export const Settings = () => {
  const [switchEE, setSwitchEE] = useState(false);
  const [switchV, setSwitchV] = useState(false);
  const [switchN, setSwitchN] = useState(false);

  const { control, handleSubmit } = useForm();

  const handleOnSubmit = (data) => {
    data.enterExit = switchEE;
    data.v = switchV;
    data.n = switchN;
    console.log(data);
  };

  return (
    <S.Container>
      <S.SubContainer>
        <h1>
          <SettingsIcon /> Configurações
        </h1>
        <S.Box onSubmit={handleSubmit(handleOnSubmit)}>
          <S.SwitchContain>
            <S.SwitchBox colorP={switchEE}>
              <Controller
                control={control}
                name="enterExit"
                render={({ field }) => (
                  <AntSwitch
                    {...field}
                    checked={switchEE}
                    onChange={(e) => setSwitchEE(e.target.checked)}
                  />
                )}
              />
              <p className="">Entrada/Saída</p>
            </S.SwitchBox>
            <S.SwitchBox colorP={switchV}>
              <Controller
                control={control}
                name="v"
                render={({ field }) => (
                  <AntSwitch
                    {...field}
                    checked={switchV}
                    onChange={(e) => setSwitchV(e.target.checked)}
                  />
                )}
              />
              <p>V</p>
            </S.SwitchBox>
            <S.SwitchBox colorP={switchN}>
              <Controller
                control={control}
                name="n"
                render={({ field }) => (
                  <AntSwitch
                    {...field}
                    checked={switchN}
                    onChange={(e) => setSwitchN(e.target.checked)}
                  />
                )}
              />
              <p>N</p>
            </S.SwitchBox>
          </S.SwitchContain>
          <S.ButtonBox>
            <button type="submit">Enviar</button>
          </S.ButtonBox>
        </S.Box>
      </S.SubContainer>
    </S.Container>
  );
};
