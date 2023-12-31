import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 350px;
  width: 350px;
  margin: 0 auto;

  svg{
    font-size: 40px;
  }

  .row {
    position: relative;
    width: 100%;
    padding: 100px 15px 150px 15px;
  }
  .inner {
    max-width: 1024px;
    margin: 0px auto;
    text-align: center;
  }

  /*main element*/
  .pulse-icon {
    position: relative;
    display: inline-block;
  }
  /*icon styling here*/

  .pulse-icon .icon-wrap {
    position: relative;
    width: 60px;
    height: 60px;
    box-shadow: 0px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #1976d2;
    position: relative;
    z-index: 2;
  }
  .pulse-icon .icon {
    line-height: 60px;
    font-size: 1.75em;
    animation: grow-shrink 4s ease-out infinite;
  }

  /*container of all circles and pulses*/
  .pulse-icon .elements {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
  }
  .pulse-icon .circle {
    border-radius: 50%;
    position: absolute;
  }
  .pulse-icon .circle-inner {
    width: 80px;
    height: 80px;
    top: -10px;
    left: -10px;
    background: linear-gradient(
      -180deg,
      rgba(25, 118, 210, 0.12) 0%,
      rgba(25, 118, 210, 0.1) 100%
    );
    animation: grow-circles 4s linear infinite both;
  }
  .pulse-icon .circle-outer {
    width: 100px;
    height: 100px;
    background: linear-gradient(
      -180deg,
      rgba(25, 118, 210, 0.12) 0%,
      rgba(25, 118, 210, 0.1) 100%
    );
    top: -20px;
    left: -20px;
    animation: grow-circles 5s linear infinite both;
  }

  /*series of x pulses of differing sizes*/
  .pulse-icon .pulse {
    position: absolute;
    animation: pulse-wave 5s linear infinite both;
    border-radius: 50%;
  }
  .pulse-icon .pulse-1 {
    border: solid 3px rgba(25, 118, 210, 0.25);
    width: 200px;
    height: 200px;
    top: -70px;
    left: -70px;
  }
  .pulse-icon .pulse-2 {
    border: solid 3px rgba(25, 118, 210, 0.35);
    width: 300px;
    height: 300px;
    top: -120px;
    left: -120px;
  }
  .pulse-icon .pulse-3 {
    border: solid 3px rgba(25, 118, 210, 0.45);
    width: 400px;
    height: 400px;
    top: -170px;
    left: -170px;
  }

  /*Animation for the outewards pulsating waves*/
  @keyframes pulse-wave {
    0% {
      opacity: 0;
      transform: scale(0.1);
    }
    50% {
      opacity: 1;
      transform: scale(0.5);
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }

  /*animation for the inner and outer wave items to grow*/
  @keyframes grow-circles {
    0% {
      opacity: 0.85;
      transform: scale(1);
    }
    15% {
      opacity: 1;
      transform: scale(1.05);
    }
    30% {
      opacity: 0.85;
      transform: scale(1);
    }
  }

  /*animation for the icon to slightly grow and shrink*/
  @keyframes grow-shrink {
    0% {
      transform: scale(1);
    }
    15% {
      transform: scale(1.1);
    }
    30% {
      transform: scale(1);
    }
  }
`;
