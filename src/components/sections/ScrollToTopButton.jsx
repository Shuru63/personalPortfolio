import React, { useState } from 'react';
import styled from 'styled-components';

// Styled-components for the button
const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color:rgb(132, 255, 0);
  color: white;
  border: none;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  font-size: 30px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &:hover {
    background-color:rgb(0, 221, 241);
  }

  &:focus {
    outline: none;
  }

  &:hover .emoji {
    transform: scale(1.2);  /* Scale emoji on hover */
  }
      &:hover .text {
    opacity: 1;  /* Show the text on hover */
  }
`;

const Emoji = styled.span`
  font-size: 40px;
  transition: transform 0.3s ease;
`;

const Text = styled.span`
  position: absolute;
  bottom: 14px;
  font-size: 18px;
  opacity: 0;  /* Initially hidden */
  transition: opacity 0.3s ease;
  color: blue;
  font-weight:800;
`;

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const ScrollToTop = () => {
  return (
    <ScrollToTopButton onClick={scrollToTop}>
      <Emoji className="emoji">💬</Emoji>
      <Text className="text">Hire me</Text>
    </ScrollToTopButton>
  );
};

export default ScrollToTop;
