import React from 'react';
import PropTypes from 'prop-types';

const VolumeDownFill = (props) => {
  const { color, size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M10.717 5.55A.5.5 0 0111 6v8a.5.5 0 01-.812.39L7.825 12.5H5.5A.5.5 0 015 12V8a.5.5 0 01.5-.5h2.325l2.363-1.89a.5.5 0 01.529-.06z"
        clipRule="evenodd"
      />
      <path d="M12.707 13.182A4.486 4.486 0 0014.025 10a4.486 4.486 0 00-1.318-3.182L12 7.525A3.489 3.489 0 0113.025 10c0 .966-.392 1.841-1.025 2.475l.707.707z" />
    </svg>
  );
};

VolumeDownFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

VolumeDownFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default VolumeDownFill;