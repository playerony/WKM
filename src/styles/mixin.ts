import { css, FlattenSimpleInterpolation } from 'styled-components'

import variables, { Breakpoint } from './variables'

export const transition = (transitions: string): FlattenSimpleInterpolation => css`
  transition: ${transitions};
  -o-transition: ${transitions};
  -ms-transition: ${transitions};
  -moz-transition: ${transitions};
  -webkit-transition: ${transitions};
`

export const transform = (transforms: string): FlattenSimpleInterpolation => css`
  transform: ${transforms};
  -o-transform: ${transforms};
  -ms-transform: ${transforms};
  -moz-transform: ${transforms};
  -webkit-transform: ${transforms};
`

export const flexbox = (): FlattenSimpleInterpolation => css`
  display: flex;
  display: -moz-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
`

export const justifyContent = (justify: string): FlattenSimpleInterpolation => css`
  -ms-flex-pack: ${justify};
  justify-content: ${justify};
  -ms-justify-content: ${justify};
  -moz-justify-content: ${justify};
  -webkit-justify-content: ${justify};
`

export const alignItems = (align: string): FlattenSimpleInterpolation => css`
  align-items: ${align};
  -ms-flex-align: ${align};
  -ms-align-items: ${align};
  -moz-align-items: ${align};
  -webkit-align-items: ${align};
`

export const flexDirection = (direction: string): FlattenSimpleInterpolation => css`
  flex-direction: ${direction};
  -ms-flex-direction: ${direction};
  -moz-flex-direction: ${direction};
  -webkit-flex-direction: ${direction};
`

export const flexWrap = (wrap: string): FlattenSimpleInterpolation => css`
  flex-wrap: ${wrap};
  -ms-flex-wrap: ${wrap};
  -moz-flex-wrap: ${wrap};
  -webkit-flex-wrap: ${wrap};
`

export const appearance = (value: string): FlattenSimpleInterpolation => css`
  appearance: ${value};
  -ms-appearance: ${value};
  -moz-appearance: ${value};
  -webkit-appearance: ${value};
`

export const respondTo = (Object.keys(variables.breakpoint) as (keyof Breakpoint)[]).reduce<
  {
    [key in keyof Breakpoint]: (style: TemplateStringsArray, ...args: Array<any>) => FlattenSimpleInterpolation
  }
>((accumulator, breakpoint) => {
  accumulator[breakpoint] = (style: TemplateStringsArray, ...args: Array<any>): FlattenSimpleInterpolation => css`
    @media (max-width: ${variables.breakpoint[breakpoint]}px) {
      ${css(style, ...args)};
    }
  `

  return accumulator
}, {} as any)

export const userSelect = (value: string): FlattenSimpleInterpolation => css`
  user-select: ${value};
  -ms-user-select: ${value};
  -moz-user-select: ${value};
  -khtml-user-select: ${value};
  -webkit-user-select: ${value};
  -webkit-touch-callout: ${value};
`
