'use client'

import * as S from './styles'
import Link from 'next/link'

export function Sidebar() {
  return (
    <S.Container>
      <h2>Components</h2>
      <ul>
        <li>
          <Link href="/components/button">Button</Link>
        </li>
      </ul>
    </S.Container>
  )
}
