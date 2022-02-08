export interface Font {
    id: number,
    title: string,
    category: string, // todo
    ascender: number,
    boldness: number,
    width: number,
    weight: number,
    roundness: number,
    serifSize: number,
    source: string,
    relativeFontSize: number,
    fileName: string,
    style: "Italic" | "Regular",
    url: string,
    loaded: boolean
}

export interface State {
    search: string,
    fonts: Font[]
}
