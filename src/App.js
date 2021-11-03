import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createClass, deleteClass } from "../src/graphql/mutations";
// I recognized the unfortunate auto-naming of this query...
import { listClasss } from "./graphql/queries";
import {
  Button,
  Header,
  Icon,
  Input,
  List,
  ListItem,
  ListContent,
  ListHeader,
} from "semantic-ui-react";
import { useStyles } from "./styles";

const initialClassState = [];
const initialFormState = { name: "" };

const App = () => {
  const [classes, setClasses] = useState(initialClassState);
  const [formState, setFormState] = useState(initialFormState);

  const { container, parentContainer } = useStyles();

  useEffect(() => {
    fetchClasses();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchClasses() {
    try {
      const classData = await API.graphql(graphqlOperation(listClasss));
      const classes = classData?.data?.listClasss?.items;
      console.log(classData);
      setClasses(classes);
    } catch (error) {
      console.log("error fetching classes", error);
    }
  }

  // async function to add a class
  async function addClass() {
    try {
      if (!formState.name) return;

      await API.graphql(
        graphqlOperation(createClass, { input: { name: formState?.name } })
      );
    } catch (error) {
      console.log("error creating a class", error);
    }
  }

  // async function to delete a class
  async function removeClass(classItem) {
    try {
      await API.graphql(
        graphqlOperation(deleteClass, { input: { id: classItem.id } })
      );
    } catch (error) {
      console.log("error deleting a class", error);
    }
  }

  return (
    <div className={parentContainer}>
      <div className={container}>
        <Header as="h1" icon textAlign="center">
          <Icon name="users" circular />
          <Header.Content>CD API test</Header.Content>
          <Header sub>
            Subscriptions not yet implemented, refresh for updates
          </Header>
        </Header>
        <Input
          onChange={(event) => setInput("name", event.target.value)}
          value={formState.name}
          placeholder="Name"
        />
        <Button onClick={addClass}>Create Class</Button>
        <List>
          {classes.map((classItem) => (
            <ListItem key={classItem.id}>
              <ListContent floated="right">
                <Button onClick={() => removeClass(classItem)} icon circular>
                  <Icon name="delete" color="red" />
                </Button>
              </ListContent>
              <ListContent>
                <ListHeader>
                  <p>{classItem.name}</p>
                </ListHeader>
              </ListContent>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default App;
