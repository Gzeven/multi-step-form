import React from 'react';
import styled, {css} from 'styled-components';

const ToggleSwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  height: 3rem;
  gap: 1.5rem;
  background-color: var(--alabaster);
  border-radius: 0.5rem;
  @media only screen and (min-width: 940px) {
    margin-top: 2rem;
  }
`;

"https://stackoverflow.com/questions/66374123/warning-text-content-did-not-match-server-im-out-client-im-in-div"



const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 2.375rem;
  height: 1.25rem;
  background-color: var(--marine-blue);
  border-radius: 0.625rem;
  cursor: pointer;
`;

const ToggleButtonTextOne = styled.span<{ checked: boolean }>`
font-size: 14px;
font-weight: 500;
color: var(--marine-blue);
${(props) =>
    props.checked &&
    css`
      color: var(--cool-gray);
    `}
`

const ToggleButtonTextTwo = styled.span<{ checked: boolean }>`
font-size: 14px;
font-weight: 500;
color: var(--cool-gray);
${(props) =>
    props.checked &&
    css`
      color: var(--marine-blue);
    `}
`

const ToggleInput = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;
`;

const ToggleSlider = styled.span<{ checked: boolean }>`
  position: absolute;
  top: 0.25rem;
  left: ${(props) => (props.checked ? '22px' : '4px')};
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 1.875rem;
  background-color: var(--white);
  transition: 0.4s;
`;

const HiddenText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
`;

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}



const ToggleButton: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
  const handleToggle = () => {
        onChange(!checked);
      };


  return (
    <ToggleSwitchContainer>
      <ToggleButtonTextOne checked={checked}>Monthly</ToggleButtonTextOne>
      <ToggleContainer htmlFor="theme-toggle"  tabIndex={0}>
        <HiddenText>Toggle Monthly Yearly</HiddenText>
        <ToggleInput id="theme-toggle" type="checkbox" checked={checked} onChange={handleToggle} tabIndex={-1} role="switch"/>
        <ToggleSlider checked={checked} />
      </ToggleContainer>
      <ToggleButtonTextTwo checked={checked}>Yearly</ToggleButtonTextTwo>
    </ToggleSwitchContainer>
  );
};


export default ToggleButton;

