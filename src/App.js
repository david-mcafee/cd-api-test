import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createCourse, deleteCourse } from "../src/graphql/mutations";
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
      }
    }
  `;

  async function fetchCourses() {
    try {
      const courses = await API.graphql(
        graphqlOperation(allCourses, { semester: "SPRING2021" })
      );
      setCourses(courses?.data?.allCourses);
    } catch (error) {
      console.log("error fetching courses", error);
    }
  }

  // async function to add a course
  async function addCourse() {
    try {
      if (!formState.name) return;

      await API.graphql(
        graphqlOperation(createCourse, { input: { name: formState?.name } })
      );
    } catch (error) {
      console.log("error creating a course", error);
    }
  }

  // async function to delete a course
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
        <Button onClick={addCourse}>Create Course</Button>
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
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default App;
