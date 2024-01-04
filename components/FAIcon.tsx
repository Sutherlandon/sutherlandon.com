import clsx from 'clsx';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { 
  faExternalLinkAlt,
  faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  fab,
  faExternalLinkAlt,
  faUserAstronaut,
);

// Add left and right spacing props to the font icon
interface CustomFontAwesomeIconProps extends FontAwesomeIconProps {
  left?: boolean,
  right?: boolean,
}

function FAIcon({ left, right, className, ...rest }: CustomFontAwesomeIconProps): JSX.Element {
  return (
    <FontAwesomeIcon
      className={clsx(className, left && 'pr-4', right && 'pl-4')}
      {...rest}
    />
  );
}

export default FAIcon;
