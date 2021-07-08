import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';

function Message(props) {
  return (
    <div className='message'>
      <Card>
        <CardContent>
          <Typography color='white' variant='h5' component='h2'>
            {props.username}: {props.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
