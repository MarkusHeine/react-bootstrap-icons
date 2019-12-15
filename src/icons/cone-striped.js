import React from 'react';
import PropTypes from 'prop-types';

const ConeStriped = (props) => {
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
        d="M9.879 13.015a.5.5 0 01.242 0l6 1.5a.5.5 0 01.037.96l-6 2a.499.499 0 01-.316 0l-6-2a.5.5 0 01.037-.96l6-1.5z"
        clipRule="evenodd"
      />
      <path d="M13.885 14.538l-.72-2.877c-.862.212-1.964.339-3.165.339s-2.303-.127-3.165-.339l-.72 2.877c-.073.292-.002.6.256.756.49.295 1.545.706 3.629.706s3.14-.411 3.63-.706c.257-.155.328-.464.255-.756zM11.97 6.88l.953 3.811C12.159 10.878 11.14 11 10 11c-1.14 0-2.159-.122-2.923-.309L8.03 6.88C8.635 6.957 9.3 7 10 7s1.365-.043 1.97-.12zm-.245-.978L10.97 2.88c-.252-1.01-1.688-1.01-1.94 0L8.275 5.9C8.8 5.965 9.382 6 10 6c.618 0 1.2-.036 1.725-.098z" />
    </svg>
  );
};

ConeStriped.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ConeStriped.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ConeStriped;