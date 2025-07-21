import logo from "../assets/logo";

const blogData = {
  name: "Underreacted",
  image: logo,
  about: "A blog about learning React",
  posts: [
    {
      id: 1,
      title: "Components 101",
      date: "December 15, 2024",
      preview: "Setting up the building blocks of your site",
      minutes: 5,
      post: `Un composant React est une fonction JavaScript qui retourne du JSX, une syntaxe proche du HTML. Il permet de créer des blocs réutilisables d'interface. Par exemple, un bouton, une carte utilisateur ou un en-tête peuvent tous être des composants.

Pour créer un composant, il suffit de définir une fonction : 
\`\`\`jsx
function Welcome() {
  return <h1>Bienvenue sur mon site !</h1>;
}
\`\`\`
On peut ensuite l’utiliser dans un autre composant comme une balise HTML : \`<Welcome />\`. Ce modèle rend l'interface modulaire et maintenable.`      
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2024",
      preview: "Passing props is never passé",
      minutes: 15,
      post: `React utilise un flux de données unidirectionnel : les données "descendent" d’un composant parent vers ses enfants via les *props*. Cela permet de garder une logique simple et prévisible.

\`\`\`jsx
function Greeting({ name }) {
  return <p>Bonjour, {name} !</p>;
}
\`\`\`
Et on l'utilise ainsi : \`<Greeting name="Alice" />\`. Les props sont en lecture seule. Pour gérer des données dynamiques, on utilisera plutôt \`useState\` dans le composant.`      
    },
    {
      id: 3,
      title: "Function vs Class Components",
      date: "October 15, 2024",
      preview: "React, meet OOJS.",
      minutes: 47,
      post: `React proposait initialement des composants de classe pour gérer le state et le cycle de vie. Mais avec l’arrivée des hooks, les fonctions ont pris le dessus.

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
\`\`\`
Les composants fonctionnels sont plus concis et plus faciles à tester, d'où leur popularité actuelle.`      
    },
    {
      id: 4,
      title: "JSX Deep Dive",
      date: "September 10, 2024",
      preview: "Mixing JS with XML-like syntax",
      minutes: 10,
      post: `JSX est une extension de syntaxe qui permet d’écrire du code HTML dans JavaScript. Il s’agit en réalité d’un sucre syntaxique pour \`React.createElement\`.

\`\`\`jsx
const element = <h1>Hello, world!</h1>;
\`\`\`
Ce code est compilé en :
\`\`\`jsx
React.createElement('h1', null, 'Hello, world!');
\`\`\`
JSX rend le code plus lisible, mais impose des règles strictes : une seule balise par retour, les attributs camelCase, etc.`      
    },
    {
      id: 5,
      title: "Props vs State",
      date: "August 25, 2024",
      preview: "Who owns the data?",
      minutes: 12,
      post: `Les *props* sont passées d’un composant parent vers ses enfants. Le *state* appartient au composant lui-même.

Exemple :
\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <p>Compteur : {count}</p>;
}
\`\`\`
Ici, \`count\` est stocké dans le composant et peut évoluer. En revanche, une prop comme \`title="Bonjour"\` est statique dans l'enfant.`      
    },
    {
      id: 6,
      title: "useEffect in Action",
      date: "August 10, 2024",
      preview: "Side effects in functional components",
      minutes: 18,
      post: `Le hook \`useEffect\` permet de gérer les effets de bord, comme une requête API, un timer ou une manipulation du DOM.

\`\`\`jsx
useEffect(() => {
  document.title = "Nouveau titre";
}, []);
\`\`\`
Le tableau vide signifie que l'effet s'exécute une seule fois (montage). Pour exécuter à chaque mise à jour d'une variable : \`[count]\`.`      
    },
    {
      id: 7,
      title: "Conditional Rendering",
      date: "July 29, 2024",
      preview: "Show or hide like a pro",
      minutes: 9,
      post: `React permet d’afficher ou non des éléments selon certaines conditions grâce à des opérateurs comme \`&&\`, \`?:\`, ou en retournant null.

\`\`\`jsx
{isLoggedIn ? <LogoutButton /> : <LoginButton />}
\`\`\`
C’est un outil essentiel pour les interfaces dynamiques, les loaders, les messages d’erreur, etc.`      
    },
    {
      id: 8,
      title: "Handling Events",
      date: "July 5, 2024",
      preview: "Respond to user interaction",
      minutes: 6,
      post: `Les événements React s’écrivent en camelCase et appellent une fonction.

\`\`\`jsx
<button onClick={handleClick}>Click</button>
\`\`\`
La fonction peut accéder à l’événement via le paramètre : \`(event) => { ... }\`. Il est possible d’empêcher le comportement par défaut avec \`event.preventDefault()\`.`      
    },
    {
      id: 9,
      title: "Lists and Keys",
      date: "June 18, 2024",
      preview: "Rendering multiple items efficiently",
      minutes: 11,
      post: `Quand on affiche une liste, chaque élément doit avoir une clé unique.

\`\`\`jsx
{items.map(item => <li key={item.id}>{item.label}</li>)}
\`\`\`
La clé permet à React d’optimiser le rendu. Elle doit être stable et unique pour chaque élément, sinon cela peut causer des bugs visuels.`      
    },
    {
      id: 10,
      title: "Forms in React",
      date: "May 20, 2024",
      preview: "Managing input state",
      minutes: 14,
      post: `Les formulaires React utilisent des composants contrôlés : la valeur du champ est stockée dans le state.

\`\`\`jsx
const [name, setName] = useState("");
<input value={name} onChange={e => setName(e.target.value)} />
\`\`\`
Cela permet de valider, transformer ou envoyer les données très facilement.`      
    },
  ],
};

export default blogData;
