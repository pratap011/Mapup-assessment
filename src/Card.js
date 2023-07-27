import React from 'react';
import { Card, Typography, Divider } from 'antd';
import {useSelector} from 'react-redux'
const { Text } = Typography;

const CountryCard = () => {

    //The country details like currency,speed,etc are fetched from the redux toolkit store and populated here

    var name = useSelector((state)=>state.changeLocation.name);
    var currency=useSelector((state)=>state.changeLocation.currency);
    var speedunit=useSelector((state)=>state.changeLocation.speedUnit);
    var distance=useSelector((state)=>state.changeLocation.distance);
    var volume=useSelector((state)=>state.changeLocation.volume);

  return (
    <Card
      style={{
        width: 300,
        backgroundColor: '#f0f5ff', // Light blue background color
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: 8,
        marginBottom: 20,
        zIndex:600,
        float:'left',
        left:1100,
        top:80
      }}
    >
      <Text strong style={{ fontSize: 18, marginBottom: 8 }}>
        {name}
      </Text>
      <Divider />
      <div style={{ marginBottom: 11 }}>
        <Text>Currency: <b>{currency}</b></Text>
      </div>
      <div style={{ marginBottom: 11 }}>
        <Text>Speed Unit: <b>{speedunit}</b></Text>
      </div>
      <div style={{ marginBottom: 11}}>
        <Text>Distance Unit: <b>{distance}</b></Text>
      </div>
      <div style={{ marginBottom: 11}}>
        <Text>Volume Unit: <b>{volume}</b></Text>
      </div>
    </Card>
  );
};

export default CountryCard;
