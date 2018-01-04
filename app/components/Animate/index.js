/*
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import animate from 'css3animation';

const defaultKey = `wt_animate_${Date.now()}`;

function getChildFormProps(props) {
  const children = props.children;
  if (React.isValidElement(children)) {
    if (!children.key) {
      return React.cloneElement(children, { key: defaultKey });
    }
  }

  return children;
}

class Animate extends Component {

  animate(animateType, callback) {
    const node = findDOMNode(this);
    const { animationName, onEnter, onLeave } = this.props;

    const aniCls = {
      name: [`${animationName}-enter`],
      active: [`${animationName}-enter-active`]
    }

    animate(animationName, aniCls, () => {
      
    })

  }
  render() {
    return (
      <div 
        className="wt-animate"
        ref={node => this.childrenRefs[key] = node}
        
      >
        {chis.props.children}
      </div>
    )
  }
}

export default Animate;






// <Animate animationName="enter" onEnter="" onLeave="" visible="" display="" />
*/
