/**
* @author: Angel Labrada Massó
* @version: v0.0.1
* @date: 26/11/2022
*/
import React, {memo, useState} from 'react';
import PropTypes from 'prop-types';
import ProductForm from '../ProductForm';
import { Button, Card, Grid, Row, Text, Loading } from '@nextui-org/react';
import { useRemoveProduct, useSearachProducts } from '../hooks/useStore';
import Swal from 'sweetalert2';
import GridIcon from '../../../components/GridIcon';
import ListIcon from '../../../components/ListIcon';
import ProductTable from '../components/ProductTable';
 
const Dashboard = () => {
  const [product, setProduct] = useState({});
  const [view, setView] = useState('cards');

  const {data, isLoading, isError, error} = useSearachProducts();
  const {removeProduct, isLoading: isRemoving} = useRemoveProduct();

  const onRemove = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      confirmButtonText: 'Cool',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        removeProduct({productId: id}).then(() => {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'The prouct has been removed successfully',
            'success'
          )
        });
      }
    });
  }


  if (isLoading) {
    return <Text>Loading...</Text>;
  }
 
  return (
    <Grid.Container gap={2} css={{minHeight: '93vh'}}>
      <Grid xs={4} css={{height: '100%'}}>
        <ProductForm product={product} setProduct={setProduct} />
      </Grid>

      <Grid xs={8}>
        <Card css={{p: "$6", m: "$10" }}>
          <Card.Header>
            <Grid.Container>
              <Grid xs={8}>
                Product List
              </Grid>

              <Grid xs={4} justify="flex-end">
              <Button.Group>
                <Button onClick={() => setView('cards')} disabled={view === 'cards'} shadow><GridIcon /></Button>
                <Button onClick={() => setView('list')} disabled={view === 'list'} shadow><ListIcon /></Button>
              </Button.Group>
              </Grid>
            </Grid.Container>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <Grid.Container gap={2} justify="flex-start">
              {view === 'cards' 
                ? data?.map((item, index) => (
                  <Grid xs={6} sm={3} key={index}>
                    <Card isPressable>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src={item.image}
                          objectFit="cover"
                          width="100%"
                          height={200}
                          alt={item.name}
                        />
                      </Card.Body>
                      <Card.Footer css={{ justifyItems: "flex-start", flexDirection: 'column' }}>
                        <Row wrap="wrap" justify="space-between" align="center">
                          <Text b>{item.name}</Text>
                          <Text 
                            h1
                            size={18}
                            css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}
                            weight="bold">
                            ${Number(item.price).toFixed(2)}
                          </Text>
                        </Row>
                        <Row wrap="wrap" justify="space-between" align="center">
                          <Text b>In stock</Text>
                          <Text b css={{ color: "$accents7", fontWeight: "$bold", fontSize: "$sm" }}>
                            {item.quantity}
                          </Text>
                        </Row>
                        <Row justify="space-between" align="center" css={{ m: '10px 0' }}>
                          <Button disabled={isRemoving} size="xs" color="error" auto onClick={() => onRemove(item?.id)}>
                          {isRemoving ? <Loading color="currentColor" size="sm" /> : 'Remove'}
                          </Button>
                          <Button size="xs" shadow onClick={() => setProduct(item)}>Edit</Button>
                        </Row>
                      </Card.Footer>
                    </Card>
                  </Grid>
                ))
                : <Grid xs={12} css={{width: '100%'}} className="wrapper-product-table">
                    <ProductTable products={data} setProduct={setProduct} onRemove={onRemove} />
                  </Grid>
              }
            </Grid.Container>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
};
 
Dashboard.propTypes = {};
 
Dashboard.defaultProps = {};
 
export default memo(Dashboard);
 