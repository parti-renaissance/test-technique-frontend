### Test Technique : Renderer de RichText en TypeScript avec Expo

#### Contexte
Vous devez créer un renderer pour afficher un document RichText basé sur un JSON donné. Le projet sera développé en TypeScript en utilisant Expo.

#### Objectif
L'objectif est de tester votre capacité à manipuler des données JSON, à créer des composants React Native, et à gérer le rendu conditionnel de texte formaté.

#### Instructions

1. **Initialisation du Projet**
   - Créez un nouveau projet Expo avec TypeScript.
   - Installez les dépendances nécessaires (`expo`, `react-native`, etc.).

2. **Données JSON**
   - Utilisez le JSON suivant comme exemple pour votre renderer :

   ```json
   {
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
   ```

3. **Cohérence Multiplateforme**
   - Assurez-vous que le rendu soit cohérent entre les plateformes web, iOS et Android.
