/**
* @author: Angel Labrada Massó
* @version: v0.0.1
* @date: 25/11/2022
*/
import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Routes, Route} from 'react-router-dom';
import MainLayout from './layouts';
import Dashboard from './modules/store/pages';
 
const MainRoutes = () => {
 
  return (
    <MainLayout>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<div>users</div>} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </MainLayout>
  );
};
 
MainRoutes.propTypes = {};
 
MainRoutes.defaultProps = {};
 
export default memo(MainRoutes);
 