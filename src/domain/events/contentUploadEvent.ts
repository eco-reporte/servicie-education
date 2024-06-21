export class ContentUploadedEvent {
    constructor(
        public contentId: number,
        public s3Url: string
    ) {}
}
