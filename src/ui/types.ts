export type ColorState = Record<'color' | 'currentColor', string> & {
    onChangeTheme: (color: string) => void
}
