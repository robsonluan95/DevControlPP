import React from 'react';
import ButtonRefresh from './index';

const ButtonRefreshDecorator = (WrappedComponent: React.ComponentType) => {
  return (props: any) => (
    <div className='decorated-button'>
      <WrappedComponent {...props} />
      
    </div>
  );
};

export default ButtonRefreshDecorator(ButtonRefresh);
