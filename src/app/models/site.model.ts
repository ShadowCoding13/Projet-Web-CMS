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
    id: string;
    background: string;
    navigation: [
                'Accueil',
                'A propos',
                'Blog',
                'Contact'
                ];
    accueil: {
        title: string,
        subtitle: string,
        illustration: string,
    }
    about: {
        illustration: string,
        description: string,
        categorie: string,
        logo: string,
        photoAuthor: string,
        storyAuthor: string,
        goal: string,
        activate: boolean
    }
    blog: {
        lastUpdate: Date,
        articles: Article[]
    }
    contact: {
        illustration: string,
        tel: number,
        mail: string,
        address: Address,
        activate: boolean
    }

    constructor(
        public title: string, 
        public author: string,
        public description: string
    ) {}
}