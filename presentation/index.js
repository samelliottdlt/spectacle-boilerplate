// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import CodeSlide from 'spectacle-code-slide';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} transitionDuration={500} theme={theme} progress="bar">
        <Slide bgColor="primary">
          <Heading size={4} textColor="secondary">
            Using Observables to model async behavior with RxJS
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1}>
            Sam Elliott De La Torre Babá
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1}>
            @SamElliott7C7
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Let's first talk about some design patterns</Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/iterator.example")}
          ranges={[
            {
              loc: [0, 0],
              title: "Iterator Pattern"
            },
            {
              loc: [0, 14]
            },
            {
              loc: [15, 20]
            },
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/observer.example")}
          ranges={[
            {
              loc: [0, 0],
              title: "Observer Pattern"
            },
            {
              loc: [0, 3]
            },
            {
              loc: [4, 7]
            },
            {
              loc: [8, 9]
            }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>What is an Observable?</Heading>
          <List>
            <ListItem>The intersection of the iterator and observer pattern.</ListItem>
            <ListItem>Allows us to model events as collections.</ListItem>
            <ListItem>Manipulate elements with operators.</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">Think of RxJS as Lodash for async</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">Why would I ever need to learn this if promises are good enough?</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Promises are:</Heading>
          <List>
            <ListItem>Eager. Instiating a promise will result in a promise immediately try to resolve.</ListItem>
            <ListItem>Represents a single future value or a reason why it couldn't resolve.</ListItem>
            <ListItem>Immutable and Uncacellable. A promise will resolve or reject.</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Observables are:</Heading>
          <List>
            <ListItem>Lazy. Don't do anything until they are subscribed to.</ListItem>
            <ListItem>Streams of data of any number of things over any amount of time.</ListItem>
            <ListItem>Can be cancelled or "unsubscribed".</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Use whichever makes sense.</Heading>
          <List>
            <ListItem>Use promises when you only have a single value that needs to be resolved.</ListItem>
            <ListItem>
              Use observables when you need to compose multiple events, care about cancellation or need to emit multiple values.
            </ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/buttonpress.example")}
          ranges={[
            {
              loc: [0, 0],
              title: "Button Press Example"
            },
            {
              loc: [0, 2]
            },
            {
              loc: [3, 4]
            },
            {
              loc: [4, 7]
            }
          ]}
        />
      </Deck>
    );
  }
}
