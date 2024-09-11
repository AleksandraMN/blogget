import classNames from 'classnames';
import style from './Svg.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as DeleteIcon
} from '../../components/Main/List/Post/ButtonDelete/img/delete.svg';

export const Svg = (prop) => {
  const {
    className,
    svg,
    width,
    height,
  } = prop;

  const classes = classNames(
    className,
    {[style.svg]: svg},
  );

  return <DeleteIcon className={classes} width={width} height={height}/>;
};

Svg.propTypes = {
  DeleteIcon: PropTypes.bool,
  svg: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};
