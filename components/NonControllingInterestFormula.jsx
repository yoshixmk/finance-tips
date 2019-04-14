import React from 'react'
import styled from '@emotion/styled'
import { space, color } from 'styled-system'

const Root = styled.div({
  display: 'flex',
  alignItems: 'center',
})

const Button = styled.button(
  {
    appearance: 'none',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'bold',
    borderRadius: '4px',
    border: 'none',
    width: '2em',
    '&:focus': {
      outline: 'none',
      boxShadow: '0 0 0 2px magenta',
    },
  },
  space,
  color
)
Button.defaultProps = {
  m: 0,
  px: 3,
  py: 2,
  color: 'background',
  bg: 'text',
}

const Samp = styled.samp(space)

const ALL_PROPERTY = 2000 // 2,000(百万)のつもり

export default class NonControllingInterestFormula extends React.Component {
  state = {
    hasNumberByParent: 1600,
  }

  inc = () => {
    this.setState(state => ({ hasNumberByParent: state.hasNumberByParent + 100 }))
  }

  dec = () => {
    this.setState(state => ({ hasNumberByParent: state.hasNumberByParent - 100 }))
  }

  render() {
    return (
      <>
        <Root>
          <label>子会社資本全体<br/>({ALL_PROPERTY})</label>
          -
          <label>親会社の持つ子会社株式<br/>({this.state.hasNumberByParent})</label>
          =
          <label>非支配株主持分<br/>({ALL_PROPERTY - this.state.hasNumberByParent})</label>
        </Root>
        <Root>
          <Button ml="auto" onClick={this.dec}>
          -
          </Button>
          <Samp mx={3}>{this.state.hasNumberByParent}</Samp>
          <Button mr="auto" onClick={this.inc}>
          +
          </Button>
        </Root>
      </>
  )
  }
}
