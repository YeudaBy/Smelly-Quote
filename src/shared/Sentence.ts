import {Entity, Fields} from "remult";

export enum Language {
    en, he, fr
}

@Entity('sentence', {
    allowApiRead: () => true,
})
export class Sentence {
    @Fields.integer()
    id!: number

    @Fields.string()
    content!: string

    @Fields.string()
    raw_content!: string

    @Fields.enum<Language>(() => Language)
    lang!: Language

    @Fields.number()
    start!: number

    @Fields.number()
    end!: number

    @Fields.number()
    episode!: number

    @Fields.number()
    season!: number

    @Fields.number()
    likes!: number

    @Fields.boolean()
    verified!: boolean
}
