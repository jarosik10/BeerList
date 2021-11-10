import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 70px;
  text-align: center;
  margin: 40px 0;

  div {
    width: 18px;
    height: 18px;
    background-color: #333;
  
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  
  .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  
  @-webkit-keyframes sk-bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0) }
    40% { -webkit-transform: scale(1.0) }
  }
  
  @keyframes sk-bouncedelay {
    0%, 80%, 100% { 
      -webkit-transform: scale(0);
      transform: scale(0);
    } 40% { 
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
  }
`

const Spinner = () => {
    return (
        <Wrapper>
            <div className='bounce1'></div>
            <div className='bounce2'></div>
            <div className='bounce3'></div>
        </Wrapper>
    );
}

export default Spinner;