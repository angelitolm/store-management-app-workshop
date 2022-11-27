/**
* @author: Angel Labrada Massó
* @version: v0.0.1
* @date: 26/11/2022
*/
import React, {memo, useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import { Card, Input, Textarea, Button, Grid, Loading } from '@nextui-org/react';
import { useAddProduct, useUpdateProduct } from '../hooks/useStore';
 
const ProductForm = ({product, setProduct}) => {
  const {addProduct, isLoading} = useAddProduct();
  const {updateProduct} = useUpdateProduct();

  const onChange = useCallback((field, evt) => {
    setProduct(prev => ({...prev, [field]: evt?.target?.value}));
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (product?.id) {
      await updateProduct({productId: product?.id, ...product}).then(() => {
        setProduct({}); // Clear state
        e.target.reset(); // Clear form
      })
    } else await addProduct(product).then(() => {
      setProduct({}); // Clear state
      e.target.reset(); // Clear form
    });
  };
 
  return (
    <Card css={{ p: "$6", m: "$10" }}>
      <Card.Header>Product Form</Card.Header>
      <Card.Divider />
      <Card.Body>
        <form onSubmit={onSubmit}>
          <Input 
            name="name"
            label="Name" 
            placeholder="Name"
            fullWidth 
            value={product?.name} 
            onChange={e => onChange('name', e)} 
          />
          <Textarea 
            name="description"
            label="Desciption" 
            placeholder="Desciption" 
            fullWidth
            value={product?.description} 
            onChange={e => onChange('description', e)} 
          />
          <Input 
              name="price"
              label="Price"
              placeholder="$0.00" 
              fullWidth type="number" 
              value={product?.price} 
              onChange={e => onChange('price', e)} 
           />
          <Input 
              name="quantity"
              label="Quantity" 
              placeholder="$0.00"
              fullWidth
              type="number" 
              value={product?.quantity} 
              onChange={e => onChange('quantity', e)} 
          />

          <Grid.Container gap={2}>
            <Grid xs={6} justify="flex-end">
              <Button color="error" type="reset" shadow onClick={() => setProduct({})}>Cancel</Button>
            </Grid>
            <Grid xs={6} justify="flex-end">
              <Button disabled={isLoading} type="submit" color="gradient" shadow>
                {isLoading ? <Loading color="currentColor" size="sm" /> : 'Save'}
              </Button>
            </Grid>
          </Grid.Container>
        </form>
      </Card.Body>
    </Card>
  );
};
  ProductForm.propTypes = {};
  ProductForm.defaultProps = {};
 
export default memo (ProductForm);
 