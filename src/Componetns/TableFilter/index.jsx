import * as React from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import WifiTetheringOffIcon from '@mui/icons-material/WifiTetheringOff';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

const FormStyle = styled.form`
  margin-top: 10px;
  margin-left: 10px;
`;

const createData = (status, id, nome, rede, boot, conect, detalhe) => {
  return {
    status,
    id,
    nome,
    rede,
    boot,
    conect,
    detalhe,
    emissor: [
      {
        id: '0201000016',
        nome: '( -- Desconhecido -- )',
        sinal: '-95dBm',
        tempo: '57m',
      },
      {
        id: '0201000016',
        nome: '( -- Desconhecido -- )',
        sinal: '78dBm',
        tempo: '18m',
      },
    ],
    receptorProximo: [
      {
        id: '0201000016',
        nome: '( -- Desconhecido -- )',
        sinal: '-88dBm',
        tempo: '19s',
      },
      {
        id: '0201000016',
        nome: '( -- Desconhecido -- )',
        sinal: '-104dBm',
        tempo: '50m',
      },
    ],
  };
};

const Row = (props) => {
  const { row, index } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow style={{ backgroundColor: open && '#F6F2F2' }}>
        <TableCell align="left">
          {row.status === 'on' ? (
            <WifiTetheringIcon style={{ color: '#28C228' }} />
          ) : (
            <WifiTetheringOffIcon style={{ color: '#F52C2C' }} />
          )}
        </TableCell>
        <TableCell align="left">{row.id}</TableCell>
        <TableCell align="left">{row.nome}</TableCell>
        <TableCell align="left">{row.rede}</TableCell>
        <TableCell align="left">{row.boot}</TableCell>
        <TableCell align="left">{row.conect}</TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow style={{ backgroundColor: open && '#F6F2F2' }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Emissor
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">id</TableCell>
                    <TableCell align="center">Nome</TableCell>
                    <TableCell align="center">Sinal</TableCell>
                    <TableCell align="center">Tempo</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.emissor.map((historyRow, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row" align="center">
                        {historyRow.id}
                      </TableCell>
                      <TableCell component="th" scope="row" align="center">
                        {historyRow.nome}
                      </TableCell>
                      <TableCell align="center">
                        <p title={historyRow.sinal}>
                          <SettingsInputAntennaIcon />
                        </p>
                      </TableCell>
                      <TableCell align="center">
                        <p title={historyRow.tempo}>
                          <QueryBuilderIcon />
                        </p>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>

            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Receptor mais próximo
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">id</TableCell>
                    <TableCell align="center">Nome</TableCell>
                    <TableCell align="center">Sinal</TableCell>
                    <TableCell align="center">Tempo</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.receptorProximo.map((historyRow, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row" align="center">
                        {historyRow.id}
                      </TableCell>
                      <TableCell component="th" scope="row" align="center">
                        {historyRow.nome}
                      </TableCell>
                      <TableCell align="center">
                        <p title={historyRow.sinal}>
                          <SettingsInputAntennaIcon />
                        </p>
                      </TableCell>
                      <TableCell align="center">
                        <p title={historyRow.tempo}>
                          <QueryBuilderIcon />
                        </p>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

const rows = [
  createData(
    'on',
    '014022D83D25CA',
    'Planta KM 04 - Balança',
    'CAMPO RICO / FERTITEX - CORP (-42dBm)',
    '15h 13m',
    '15h 13m',
  ),
  createData(
    'off',
    '014022D83D440E',
    'Planta KM 04 - Entrada',
    'CAMPO RICO / FERTITEX - CORP (-37dBm)',
    '8h 14m',
    '8h 14m',
  ),
  createData(
    'on',
    '014022D83D51A2',
    'Planta KM 04 - Saída',
    'CAMPO RICO / FERTITEX - CORP (-42dBm)',
    '8h 14m',
    '8h 14m',
  ),
  createData(
    'off',
    '01A0B7654BD246',
    'Porto - Guarita',
    'CAMPO RICO / FERTITEX - CDP (-4dBm)',
    '8h 14m',
    '8h 14m',
  ),
];

export const TableFilter = ({ search = true }) => {
  const [filteredRows, setFilteredRows] = React.useState(rows);

  const { register, handleSubmit, watch } = useForm();

  useEffect(() => {
    if (watch('search') === '') {
      setFilteredRows(rows);
    }
  }, [watch('search')]);

  const onSubmit = (data) => {
    const { search } = data;

    const filteredData = rows.filter((row) => {
      return (
        row.id.toLowerCase().includes(search.toLowerCase()) ||
        row.nome.toLowerCase().includes(search.toLowerCase()) ||
        row.rede.toLowerCase().includes(search.toLowerCase())
      );
    });

    setFilteredRows(filteredData);
  };

  return (
    <TableContainer component={Paper}>
      {search && (
        <FormStyle onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Pesquisar"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            size="small"
            {...register('search')}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </FormStyle>
      )}
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Nome</TableCell>
            <TableCell align="left">Rede</TableCell>
            <TableCell align="left">Boot</TableCell>
            <TableCell align="left">Conect</TableCell>
            <TableCell align="left">Detalhes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRows.map((row, index) => (
            <Row key={row.name} row={row} index={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
