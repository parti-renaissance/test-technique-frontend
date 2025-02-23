export interface MarkNode {
    type: 'bold' | 'italic';
}

export interface TextNode {
    type: 'text';
    text: string;
    marks?: MarkNode[];
}

export interface ParagraphNode {
    type: 'paragraph';
    content?: TextNode[];
}

export interface OrderedListNode {
    type: 'orderedList';
    attrs?: {
        start?: number;
    };
    content?: ListItemNode[];
}

export interface BulletListNode {
    type: 'bulletList';
    content?: ListItemNode[];
}

export interface ListItemNode {
    type: 'listItem';
    content?: ParagraphNode[];
}

export interface RichtextDocument {
    type: 'doc';
    content: (ParagraphNode | OrderedListNode | BulletListNode)[];
}