import styled from 'styled-components'

import { transform, transition, respondTo } from '@styles/mixin'

export const StyledWrapper = styled.div`
  flex-grow: 1;
  margin: auto;
  position: relative;

  display: grid;
  grid-gap: 3vmin;
  align-items: center;
  justify-items: center;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(6, 1fr);

  ${respondTo.mobileScreen`
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(4, 1fr);
  `}
`

export const StyledGalleryImage = styled.img`
  z-index: 1;
  cursor: pointer;
  max-width: 100%;
  grid-column: span 2;
  margin-bottom: -32%;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);

  ${transform('scale(1)')}
  ${transition('all 300ms')}

  &:nth-child(5n + 1) {
    grid-column: 2 / span 2;

    ${respondTo.mobileScreen`
      grid-column: span 2;
    `}
  }

  &:nth-child(3n + 1) {
    ${respondTo.mobileScreen`
      grid-column: 2 / span 2;
    `}
  }

  &:hover {
    z-index: 2;

    ${transform('scale(1.5)')}
  }
`
