import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { 
  faEdit,
  faQuoteRight,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  fab,
  faEdit,
  faQuoteRight,
);

const useStyles = makeStyles((theme) => ({
  left: {
    paddingRight: theme.spacing(),
  },
  right: {
    paddingLeft: theme.spacing(),
  },
}));

function FAIcon(props) {
  const { left, right, ...rest } = props;
  const classes = useStyles();

  return (
    <FontAwesomeIcon
      className={clsx(
        left && classes.left,
        right && classes.right,
      )}
      {...rest}
    />
  );
}

export default FAIcon;
