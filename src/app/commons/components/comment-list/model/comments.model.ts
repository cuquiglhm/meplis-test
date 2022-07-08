export interface CommentModel {
    avatarURL: string;
    username: string;
    title: string;
    body: string;
    parentId?: number;
    like?: boolean;
    deslike?: boolean;
    ban?: boolean;
}