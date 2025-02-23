// @ts-nocheck
// Ce fichier de test contient volontairement des erreurs de typage pour simuler des cas inattendus.

import { RichtextDocument } from "./type"

const data: RichtextDocument = {
    "type": "doc",
    "content": [
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "text": "Création d'un json"
                },
                {
                    "type": "text",
                    "marks": [
                        {
                            "type": "bold"
                        }
                    ],
                    "text": " TipTap"
                }
            ]
        },
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "text": "Un texte peut être en "
                },
                {
                    "type": "text",
                    "marks": [
                        {
                            "type": "italic"
                        }
                    ],
                    "text": "italique"
                },
                {
                    "type": "text",
                    "text": " en "
                },
                {
                    "type": "text",
                    "marks": [
                        {
                            "type": "bold"
                        }
                    ],
                    "text": "gras"
                },
                {
                    "type": "text",
                    "text": ","
                }
            ]
        },
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "text": "Bien prendre en compte les sauts de lignes."
                }
            ]
        },
        {
            "type": "paragraph",
        },
        {
            "type": "paragraphh",
            "content": [
                {
                    "type": "text",
                    "text": "comment se comporte le  renderer face à un imprévu ?"
                }
            ]
        },
        {
            "type": "orderedList",
            "attrs": {
                "start": 1
            },
            "content": [
                {
                    "type": "listItem",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Peut être "
                                },
                                {
                                    "type": "text",
                                    "marks": [
                                        {
                                            "type": "bold"
                                        }
                                    ],
                                    "text": "en gras"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "listItem",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Peut être"
                                },
                                {
                                    "type": "text",
                                    "marks": [
                                        {
                                            "type": "italic"
                                        }
                                    ],
                                    "text": " en italique"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "bulletList",
            "content": [
                {
                    "type": "listItem",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Peut être "
                                },
                                {
                                    "type": "text",
                                    "marks": [
                                        {
                                            "type": "bold"
                                        }
                                    ],
                                    "text": "en gras"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "listItem",
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Peut être"
                                },
                                {
                                    "type": "text",
                                    "marks": [
                                        {
                                            "type": "italic"
                                        }
                                    ],
                                    "text": " en italique"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

export default data