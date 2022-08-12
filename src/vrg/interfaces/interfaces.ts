export interface VG {
    id?: string,
    name?: string,
    background_image?: string,
    rating?: number,
    description?: string,
    released?: string,
    platforms?: {
        platform: {
            id: number,
            slug:string,
            name:string
        },
        released_at: string,
        requirements: {
            minimum: string,
            recommended: string
        }
        }[]
}

export type T_VG = VG[]

export interface VGstate {
    videogames: VG[],
    videogameDetail: VG
}