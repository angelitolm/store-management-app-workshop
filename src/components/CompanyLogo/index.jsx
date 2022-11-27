/**
* @author: Angel Labrada Massó
* @version: v0.0.1
* @date: 25/11/2022
*/
import React, {memo} from 'react';
import PropTypes from 'prop-types';
 
const CompanyLogo = ({width, height}) => {
 
  return (
    <svg
    className=""
    fill="none"
    height={height || 36}
    viewBox="0 0 32 32"
    width={width || 36}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect fill="var(--secondary)" height="100%" rx="16" width="100%" />
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
  );
};
 
CompanyLogo.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
 
CompanyLogo.defaultProps = {};
 
export default memo(CompanyLogo);
 