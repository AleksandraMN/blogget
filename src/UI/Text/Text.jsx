import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from 'prop-types';


export const Text = prop => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    center,
    ar = 'aria-Label',
    bold,
    medium,
    onClick,
  } = prop;

  const classes = classNames(
    className,
    style[color],
    {[style.center]: center},
    {[style[`fs${size}`]]: size},
    {[style[`fst${tsize}`]]: tsize},
    {[style[`fsd${dsize}`]]: dsize},
    {[style.bold]: bold},
    {[style.medium]: medium},
  );

  return <As
    className={classes}
    onClick={onClick}
    href={href}
    ar={ar}
  >
    {children}
  </As>;
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
    PropTypes.func,
    PropTypes.number,
  ]),
  href: PropTypes.string,
  center: PropTypes.bool,
  ar: PropTypes.string,
  onClick: PropTypes.func,
  bold: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  medium: PropTypes.number,
};
