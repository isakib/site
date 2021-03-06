import React from 'react'
import styled from 'styled-components'
import { Position, Absolute, Button } from 'serverless-design-system'

const EditGithubButton = styled(Button)`
line-height: 14px;

  &:focus {
    outline: none;
  }
`

export default class EditOnGithubOption extends React.Component {
  render() {
    return (
        <Position
        position='sticky'
        top='30%'
        zIndex={1}
      >
        <Absolute
          display={['none', 'none', 'block']}
          right={0}
          style={{
            transform: 'rotate(270deg) translate(0, -100%)',
            transformOrigin: '100% 0'
          }}
        >
        <a
          title='View this example on GitHub'
          rel='noopener noreferrer'
          target='_blank'
          href={this.props.gitLink}
        >
          <EditGithubButton
            height={32}
            width={161}
            fontSize={'14px'}
            letterSpacing={'0.6px'}
            py={1}
          >
            view on Github
          </EditGithubButton>
         </a>
        </Absolute>
      </Position>
    )
  }
}
