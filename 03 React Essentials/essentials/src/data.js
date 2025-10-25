import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];
export const Examples = {
  Components: {
    title: 'Components',
    description:
      'Components are building blocks of React applications. A compoent is a self-contained module(HTML + Optional CSS + JS) that renders some output',
    code: `
    function Welcome(){
    return <h1> Hello, world!</h1>
    }`,
  },
  JSX: {
    title: 'JSX',
    description:
      'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript(e.g, it may output dynamic content).',
    code:
      `
<div>
  <h1> Welcome {userName} </h1>
  <p> Time to learn React! </p>
</div>`,
  },
  props: {
    title: 'Props',
    description:
      'Components accept arbitray inputs called props. They are typically put into {}',
    code: `
    function Welcome(props){
    return <h1> Hello, {props.name}</h1>;
    }
    `,
  },
  State: {
    title: 'State',
    description:
      'State allows React components to change their output over time when there is change in the dom',
    code: `
    function Counter(){
    const [ isVisible,setIsVisible = useState(false);
    }
    `
  }
}