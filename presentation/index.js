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
  Text,
  Image,
  CodePane,
  Code
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
            Thinking Reactively
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1}>
            Sam Elliott De La Torre Babá
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1}>
            @SamElliott7C7
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary" caps>What is reactive programming and why is it so important?</Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary">
            Reactive programming is event driven programming.
          </Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/event.example")}
          ranges={[
            {
              loc: [0,3],
              title: "This is nothing new"
            }
          ]}
        />
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary">
            It also has a lot to do with how we model our data. What if we could model our data as streams?
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary">
            What happens when we do this?
          </Heading>
          <Heading size={6} textColor="tertiary">
            a = b + c
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary">
            Can you get to the point?
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary">
            Async is hard.
          </Heading>
          <Heading size={6} textColor="secondary">
            Streams make it easier to manage async.
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary">
            Async challenges:
          </Heading>
          <List>
            <ListItem>Mental model</ListItem>
            <ListItem>Race conditions</ListItem>
            <ListItem>Code management</ListItem>
            <ListItem>Complex state machine</ListItem>
            <ListItem>Error handling</ListItem>
            <ListItem>State management</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Text size={6} textColor="secondary">
            Lets pretend we need to implement drag and drop.
          </Text>
          <Text size={6} textColor="secondary">
            We need to subscribe to 3 events:
          </Text>
          <List>
            <ListItem>Mouse up</ListItem>
            <ListItem>Mouse down</ListItem>
            <ListItem>Mouse movement</ListItem>
          </List>
          <Text size={6} textColor="secondary">
            That's a lot of state to keep track of.
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary">
            The majority of our applications are async.
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary">
            We have promises and they work fine for async.
          </Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/promises.example")}
          ranges={[
            {
              loc: [0, 0],
              title: "Promise example"
            },
            {
              loc: [0, 5]
            },
            {
              loc: [6, 9]
            }
          ]}
        />
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary">
            Promises are part of a solution.
          </Heading>
          <List>
            <ListItem>Cannot cancel</ListItem>
            <ListItem>No finally handler</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary">
            Reactive extensions to the rescue.
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary">
            RX has been around for a long time.
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary">
            What does RX give us?
          </Heading>
          <List>
            <ListItem>Observables</ListItem>
            <ListItem>Same language across multiple platforms.</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary" caps>So what are these observables?</Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={6} textColor="secondary">
            Seeing massive adoption in the frontend.
          </Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/angularhttp.example")}
          ranges={[
            {
              loc: [0, 9],
              title: "Straight outta angular docs"
            }
          ]}
        />
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
            <ListItem>Create new observable streams with operators.</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">An observbale is a function that takes in an observer.</Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/observable-imp.example")}
          ranges={[
            {
              loc: [0, 0],
              title: "Observable Implementation"
            },
            {
              loc: [0, 9]
            },
            {
              loc: [9, 15]
            }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">
            An operator is a function that takes in an observable and returns an observable.
          </Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/map-operator.example")}
          ranges={[
            {
              loc: [0, 0],
              title: "Operator Implementation"
            },
            {
              loc: [0, 8]
            }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/observable-and-operator.example")}
          ranges={[
            {
              loc: [0, 0],
              title: "Putting it all together"
            },
            {
              loc: [0, 6]
            },
            {
              loc: [7, 11]
            }
          ]}
        />
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
          <Image src={require('../assets/tor.png')} height='100%' width='100%' />
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
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Examples</Heading>
          <List>
            <ListItem>https://jsbin.com/hikoci/edit?js,console</ListItem>
            <ListItem>https://jsbin.com/xomose/edit?js,console,output</ListItem>
            <ListItem>https://jsbin.com/rusehos/edit?js,console,output</ListItem>
            <ListItem>https://jsbin.com/ximilu/edit?js,output</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
