/**
* @author: Angel Labrada Massó
* @version: v0.0.1
* @date: 25/11/2022
*/
import React, {memo} from 'react';
import PropTypes from 'prop-types';
import Nav from './Navbar';
 
const MainLayout = ({children}) => {
 
  return (
    <div style={{width: '100%'}}>
      <Nav />
      {children}
    </div>
  );
};
 
MainLayout.propTypes = {
  children: PropTypes.any
};
 
MainLayout.defaultProps = {};
 
export default memo(MainLayout);
 