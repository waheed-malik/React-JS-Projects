import styled from 'styled-components';

const rollDice = ({rollDice,currentDice}) => {




  return (
    <DiceContainer>
      <div className='dice' onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default rollDice;

const DiceContainer = styled.div`
  margin-top:48px;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;

  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
`;
