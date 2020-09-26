import React from 'react';
import styled from 'styled-components/native';

type ButtonProps = {
  onPress: () => void;
  title: string;
};

const Button = ({title, onPress}: ButtonProps) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  );
};

export {Button};

const ButtonContainer = styled.TouchableOpacity`
  background-color: #102542;
  width: 50%;
  align-self: center;
  color: white;
  margin: 2%;
  padding: 2%;
  border-radius: 2px;
  align-items: center;
  align-content: center;
`;

const ButtonTitle = styled.Text`
  color: white;
  font-weight: bold;
`;
