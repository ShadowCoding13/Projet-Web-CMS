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
    author: string,
    content: string,
    like: number
}


export class Site {

    public background: string;
    public accueil: {
        title: string,
        subtitle: string,
        illustration: string,
    };
    public about: {
        illustration: string,
        description: string,
        categorie: string,
        logo: string,
        photoAuthor: string,
        storyAuthor: string,
        goal: string,
        activate: boolean
    };
    public blog: {
        lastUpdate: Date,
        articles: Article[]
    };
    public contact: {
        illustration: string,
        tel: number,
        mail: string,
        address: Address,
        activate: boolean
    }

    constructor(
        public title: string, 
        public author: string,
        public description: string,
        public navigation?: string[],
    ) {}
}