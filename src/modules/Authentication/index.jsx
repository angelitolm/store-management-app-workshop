/**
* @author: Angel Labrada Massó
* @version: v0.0.1
* @date: 25/11/2022
*/
import React, {memo, useCallback} from 'react';
import PropTypes from 'prop-types';
import { Input, Checkbox, Button  } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
 
const Authentication = () => {

  const navigate = useNavigate();

  const goTo = useCallback(() => {
    navigate('/admin')
  }, []);
 
  return (
    <div style={{width: '100%', padding: '1rem'}}>
      <Input label="Username" placeholder="Username" fullWidth />
      <Input label="Password" placeholder="Password" type="password" fullWidth />
      <div style={{padding: '1rem 0'}}>
       <Checkbox defaultSelected={true}>Remember me</Checkbox>
      </div>
      <div className="flex items-center justify-center">
        <Button fullWidth type="success" onClick={goTo} shadow color="gradient">Sign in</Button>
      </div>
      
    </div>
  );
};
 
Authentication.propTypes = {};
 
Authentication.defaultProps = {};
 
export default memo(Authentication);
 