import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RichtextDocument, ParagraphNode, TextNode, ListItemNode, BulletListNode, OrderedListNode } from '../../data/Richtext/type';

const TextElement = ({ text, marks }: TextNode) => {
    const isBold = marks?.some(mark => mark.type === 'bold');
    const isItalic = marks?.some(mark => mark.type === 'italic');

    // TODO : Implémenter la prise en charge des liens

    return (
        <Text style={[
            styles.text,
            isBold && styles.bold,
            isItalic && styles.italic,
        ]}>
            {text}
        </Text>
    );
};

const Paragraph = ({ content }: ParagraphNode) => (
    <Text style={styles.paragraph}>
        {Array.isArray(content) && content?.map((item, index) => {
            if (item.type === 'text') return <TextElement key={index} {...item} />;
            return null;
        })}
    </Text>
);

interface ListItemProps extends ListItemNode {
    options?: { type: 'bullet' | 'number'; number?: number };
}

const ListItem = ({ content, options }: ListItemProps) => (
    <View style={styles.listItem}>
        {options?.type === 'number' ? <Text>{options.number}. </Text> : <Text>• </Text>}
        {Array.isArray(content) && content?.map((item, index) => (
            <Paragraph key={index} {...item} />
        ))}
    </View>
);

const BulletList = ({ content }: BulletListNode) => (
    <View style={styles.list}>
        {Array.isArray(content) && content?.map((item, index) => (
            <ListItem key={index} {...item} options={{ type: 'bullet' }} />
        ))}
    </View>
);

const OrderedList = ({ content, attrs }: OrderedListNode) => (
    <View style={styles.list}>
        {Array.isArray(content) && content?.map((item, index) => (
            <ListItem key={index} {...item} options={{ type: 'number', number: (attrs?.start ?? 1) + index }} />
        ))}
    </View>
);

// Les contenus sans typage correct ne sont pas affichés.
// Un warning est log pour que l'erreur soit corrigée avant la mise en production.
const Unrecognized = ({ node }: { node: any }) => {
    console.warn(`Type de contenu non reconnu :`, node?.type);
    return null;
};

const RichTextRenderer = ({ data }: { data: RichtextDocument }) => (
    <View>
        {data?.content?.map((item, index) => {
            switch (item.type) {
                case 'paragraph':
                    return <Paragraph key={index} {...item} />;
                case 'bulletList':
                    return <BulletList key={index} {...item} />;
                case 'orderedList':
                    return <OrderedList key={index} {...item} />;
                default:
                    return <Unrecognized key={index} node={item} />;
            }
        })}
    </View>
);

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        lineHeight: 20,
    },
    bold: {
        fontWeight: '700',
    },
    italic: {
        fontStyle: 'italic',
    },
    paragraph: {
        minHeight: 20,
    },
    list: {
        marginLeft: 16,
    },
    listItem: {
        flexDirection: 'row',
        marginBottom: 4,
    },
});

export default RichTextRenderer;
