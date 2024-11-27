import * as S from './styles'

interface ButtonProps {
  title: string
  radius?: 'full' | 'default'
  loading?: boolean
}

export function Button({
  title,
  radius = 'default',
  loading = false,
}: ButtonProps) {
  return (
    <S.Button $radius={radius} disabled={loading} $loading={loading}>
      {loading && <S.Spinner />}
      {title}
    </S.Button>
  )
}
