/**
* @author: Angel Labrada Massó
* @version: v0.0.1
* @date: 25/11/2022
*/
import React, {memo, useCallback} from 'react';
import PropTypes from 'prop-types';
import { Navbar, Button, Link, Text, Dropdown, Avatar } from "@nextui-org/react";
import {useNavigate} from 'react-router-dom';
import CompanyLogo from '../../components/CompanyLogo';
 
const Nav = () => {

  const navigate = useNavigate();

  const onAction = useCallback((key) => {
    if (key === 'logout')
      navigate('/');
    else alert('You clicked on ' + key);
  }, []);
 
 
  return (
    <Navbar isBordered variant="sticky" maxWidth="fluid">
      <Navbar.Brand>
        <div className="flex items-center justify-center">
          <CompanyLogo />
          <Text
            size={18}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            Store Managament
          </Text>
        </div>
      </Navbar.Brand>
      {/* <Navbar.Content hideIn="xs">
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link isActive href="#">Customers</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content> */}
      <Navbar.Content>
        <Dropdown placement="bottom-right">
          <Navbar.Item>
            <Dropdown.Trigger>
              <Avatar
                bordered
                as="button"
                color="secondary"
                size="md"
                src="https://i.pravatar.cc/150"
              />
            </Dropdown.Trigger>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="User menu actions"
            color="secondary"
            onAction={onAction}
          >
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                Signed in as
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
                zoey@example.com
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
              My Settings
            </Dropdown.Item>
            <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
            <Dropdown.Item key="analytics" withDivider>
              Analytics
            </Dropdown.Item>
            <Dropdown.Item key="system">System</Dropdown.Item>
            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
            <Dropdown.Item key="help_and_feedback" withDivider>
              Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item key="logout" withDivider color="error">
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </Navbar.Content>
    </Navbar>
  );
};
 
 
Nav.defaultProps = {};
 
export default memo(Nav);
 