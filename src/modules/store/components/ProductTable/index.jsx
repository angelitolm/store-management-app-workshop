/**
* @author: Angel Labrada Massó
* @version: v0.0.1
* @date: 26/11/2022
*/
import React, {memo, useCallback} from 'react';
import PropTypes from 'prop-types';
import {Table, User, Row, Col, Text, Tooltip, styled} from '@nextui-org/react';
import {EyeIcon} from '../../../../components/EyeIcon';
import {EditIcon} from '../../../../components/EditIcon';
import {DeleteIcon} from '../../../../components/DeleteIcon';
 
// IconButton component will be available as part of the core library soon
export const IconButton = styled('button', {
  dflex: 'center',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  padding: '0',
  margin: '0',
  bg: 'transparent',
  transition: '$default',
  '&:hover': {
    opacity: '0.8'
  },
  '&:active': {
    opacity: '0.6'
  }
});

const columns = [
  { name: "Name", uid: "name" },
  { name: "Price", uid: "price" },
  { name: "Quantity", uid: "quantity" },
  { name: "Actions", uid: "actions" },
];

const ProductTable = ({products, setProduct, onRemove}) => {

  const renderCell = useCallback((item, columnKey) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User squared src={item.image} name={cellValue} css={{ p: 0 }}>
            {item?.name}
          </User>
        );
      case "price":
        return (
          <Col>
            <Row>
              <Text b size={13} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>
                ${Number(item.price).toFixed(2)}
              </Text>
            </Row>
          </Col>
        );
      case "quantity":
        return (
          <Col>
            <Row>
              <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                {item.quantity}
              </Text>
            </Row>
          </Col>
        );
      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Details">
                <IconButton onClick={() => console.log("View product", user.id)}>
                  <EyeIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit product">
                <IconButton onClick={() => setProduct(item)}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete product"
                color="error"
                onClick={() => onRemove(item.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  }, []);
 
  return (
    <Table
      aria-label="Example table with custom cells"
      css={{
        height: "auto",
        minWidth: "100%",
        width: "100%",
      }}
      selectionMode="none"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
            hideHeader={column.uid === "actions"}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={products} css={{width: '100%'}}>
        {(item) => (
          <Table.Row css={{width: '100%'}}>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
};
 
ProductTable.propTypes = {
  products: PropTypes.array,
  setProduct: PropTypes.func,
  onRemove: PropTypes.func,
};
 
ProductTable.defaultProps = {};
 
export default memo(ProductTable);
 