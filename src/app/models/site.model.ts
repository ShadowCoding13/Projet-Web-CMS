interface Address {
    city: string,
    address: string,
}

interface Article {
    title: string,
    categorie: string,
    content: string,
    illustration: string,
    like?: number,
    comments?: Comment[]
}

interface Comment {
    author: string,
    content: string,
}


export class Site {

    constructor(
        public title: string, 
        public author: string,
        public description: string,
        public navigation: string[],
        public background: string,
        public about: {
            illustration?: string,
            content: string,
            logo?: string,
            photoAuthor?: string,
            storyAuthor: string,
            goal: string,
        },
        public contact: {
            description: string,
            tel: number,
            mail: string,
            address: Address,
        },
        public blog: {
            lastUpdate?: Date,
            articles: Article[]
        }
    ) {}
}