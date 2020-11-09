import * as React from 'react';
import { InstanceDetails } from '@spinnaker/core';

export class CatApplicationIcon extends React.Component {
  render() {
    return (
      <img 
        style={{ width: '25px', filter: 'invert(1)' }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/1200px-Cat_silhouette.svg.png" 
      />
    )
  }
}
