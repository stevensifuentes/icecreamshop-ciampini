import React from 'react';
import { Icon } from 'react-icons-kit';
import { starFullOutline } from 'react-icons-kit/typicons/starFullOutline';
import { starHalfOutline } from 'react-icons-kit/typicons/starHalfOutline';

const Starts = () => {
  return (
    <p>
        <Icon icon={starFullOutline}/>
        <Icon icon={starFullOutline}/>
        <Icon icon={starFullOutline}/>
        <Icon icon={starFullOutline}/>
        <Icon icon={starHalfOutline}/>
    </p>
  )
}

export default Starts;