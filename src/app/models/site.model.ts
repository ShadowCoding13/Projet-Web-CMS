interface Address {
    city: string,
    firstLign: string,
    secondLign: string
}

interface Article {
    id: string,
    title: string,
    categorie: string,
    content: string,
    illustration: string,
    createdAt: Date,
    updatedAt: Date,
    like: number,
    comments: Comment[]
}

interface Comment {
    id: number,
    author: string,
    content: string,
}


export class Site {

    public blog: {
        lastUpdate: Date,
        articles: Article[]
    }

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
        }
    ) {}
}