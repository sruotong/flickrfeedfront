export interface IFeeds {
    title: string;
    link: string;
    pubDate: string | Date;
    author: string;
    imageLink: string;
    content?: string;
    contentSnippet?: string;
}

export class Feeds implements IFeeds{
    constructor(
        public title: string,
        public link: string,
        public pubDate: string | Date,
        public author: string,
        public imageLink: string,
        public contentSnippet?: string
    ){}
}