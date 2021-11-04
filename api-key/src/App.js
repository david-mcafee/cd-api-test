import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { deleteCourse } from "../src/graphql/mutations";
import {
  Button,
  Header,
  Icon,
  Input,
  List,
  ListItem,
  ListContent,
  ListDescription,
  ListHeader,
} from "semantic-ui-react";
import { useStyles } from "./styles";

const initialCourseState = [];
const initialFormState = { name: "" };

const App = () => {
  const [courses, setCourses] = useState(initialCourseState);
  const [formState, setFormState] = useState(initialFormState);

  const { container, parentContainer } = useStyles();

  useEffect(() => {
    fetchCourses();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  const allCourses = /* GraphQL */ `
    query allCourses($semester: String!) {
      allCourses(semester: $semester) {
        id
        name
        registrations {
          items {
            id
            name
          }
        }
      }
    }
  `;

  async function fetchCourses() {
    try {
      const courses = await API.graphql(
        graphqlOperation(allCourses, { semester: "SPRING2021" })
      );
      console.log(courses);
      setCourses(courses?.data?.allCourses);
    } catch (error) {
      console.log("error fetching courses", error);
    }
  }

  const register = /* GraphQL */ `
    mutation register($id: ID!, $name: String!) {
      register(id: $id, name: $name) {
        id
        name
      }
    }
  `;

  async function registerForCourse(id) {
    try {
      if (!formState.name) return;

      const result = await API.graphql(
        graphqlOperation(register, { id: id, name: formState?.name })
      );
      console.log(result);
    } catch (error) {
      console.log("error adding registration", error);
    }
  }

  async function removeCourse(courseItem) {
    try {
      await API.graphql(
        graphqlOperation(deleteCourse, { input: { id: courseItem.id } })
      );
    } catch (error) {
      console.log("error deleting a course", error);
    }
  }

  return (
    <div className={parentContainer}>
      <div className={container}>
        <Header as="h1" icon textAlign="center">
          <Icon name="users" circular />
          <Header.Content>CD test / API key</Header.Content>
          <Header sub>
            Subscriptions not yet implemented, refresh for updates
          </Header>
        </Header>
        <Input
          onChange={(event) => setInput("name", event.target.value)}
          value={formState.name}
          placeholder="Enter name to register"
        />
        <List>
          {courses.map((courseItem) => (
            <ListItem key={courseItem.id}>
              <ListContent floated="right">
                <Button onClick={() => removeCourse(courseItem)} icon circular>
                  <Icon name="delete" color="red" />
                </Button>
              </ListContent>
              <ListContent>
                <ListHeader>
                  <p>{courseItem.name}</p>
                </ListHeader>
              </ListContent>
              <ListContent>
                <ListDescription>
                  <p>{courseItem.id}</p>
                </ListDescription>
              </ListContent>
              <ListContent>
                <Button onClick={() => registerForCourse(courseItem?.id)}>
                  Register
                </Button>
              </ListContent>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default App;