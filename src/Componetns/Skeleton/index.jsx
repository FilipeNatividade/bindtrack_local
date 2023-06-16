import { makeStyles } from '@material-ui/core';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import { Stack } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  skeletonIcon: {
    animation: '$colorAnimation 1.5s infinite',
  },
  '@keyframes colorAnimation': {
    '0%': {
      color: theme.palette.grey[300],
    },
    '50%': {
      color: theme.palette.grey[500],
    },
    '100%': {
      color: theme.palette.grey[300],
    },
  },
}));

export const Skeleton = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90%',
      }}
    >
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <SettingsInputAntennaIcon
          className={classes.skeletonIcon}
          style={{ fontSize: '400px', margin: '0 auto' }}
        />
      </Stack>
    </div>
  );
};
