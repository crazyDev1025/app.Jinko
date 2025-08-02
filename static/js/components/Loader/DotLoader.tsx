import styled from 'styled-components'
import { Text } from '@nextui-org/react'

const DotLoading = styled(Text)`
font-size:0.875rem;
width:20px; 
margin-bottom:0px;
:after {
  content: ' .';
  animation: dots 1s steps(5, end) infinite;}

@keyframes dots {
  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  40% {
    color: var(--yellowColor);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  60% {
    text-shadow:
      .25em 0 0 var(--yellowColor),
      .5em 0 0 rgba(0,0,0,0);}
  80%, 100% {
    text-shadow:
      .25em 0 0 var(--yellowColor),
      .5em 0 0 var(--yellowColor);}}

`
export default DotLoading;