/**
* @author: Angel Labrada Massó
* @version: v0.0.1
* @date: 25/11/2022
*/
import React, {memo} from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Text, Card } from '@nextui-org/react';
import './index.css';
import CompanyLogo from '../../components/CompanyLogo';

 
const AuthLayout = ({children}) => {
 
  return (
    <Container>
      <Row justify="center" align="center" className="auth-layout">
        <div className="flex items-center justify-center" style={{padding: '2rem'}}>
          <CompanyLogo width={64} height={64} />
          <Text
            h1
            size={24}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            Store Managament
          </Text>
        </div>
        <Card style={{ width: 350 }}>
          <Card.Body>
              {children}
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};
 
AuthLayout.propTypes = {
  children: PropTypes.any
};
 
AuthLayout.defaultProps = {};
 
export default memo(AuthLayout);
 