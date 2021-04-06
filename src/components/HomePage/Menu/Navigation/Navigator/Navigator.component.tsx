import React from 'react'

import { NavigatorProps } from './Navigator.types'
import { StyledItem, StyledWrapper } from './Navigator.styles'

const Navigator = ({ onHover, onClick, initialIndex, hoveredIndex }: NavigatorProps): JSX.Element => {
  const onMouseOver = (index: number) => () => onHover(index)

  const onItemClick = (index: number) => () => onClick(index)

  return (
    <StyledWrapper>
      <StyledItem active={initialIndex === 0} selected={hoveredIndex === 0} onMouseOver={onMouseOver(0)} onClick={onItemClick(0)} />
      <StyledItem active={initialIndex === 1} selected={hoveredIndex === 1} onMouseOver={onMouseOver(1)} onClick={onItemClick(1)} />
      <StyledItem active={initialIndex === 2} selected={hoveredIndex === 2} onMouseOver={onMouseOver(2)} onClick={onItemClick(2)} />
      <StyledItem active={initialIndex === 3} selected={hoveredIndex === 3} onMouseOver={onMouseOver(3)} onClick={onItemClick(3)} />
      <StyledItem active={initialIndex === 4} selected={hoveredIndex === 4} onMouseOver={onMouseOver(4)} onClick={onItemClick(4)} />
      <StyledItem active={initialIndex === 5} selected={hoveredIndex === 5} onMouseOver={onMouseOver(5)} onClick={onItemClick(5)} />
    </StyledWrapper>
  )
}

export default Navigator
