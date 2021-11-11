import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
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
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

const initialCourseState = [];
const initialFormState = { name: "" };

const App = () => {
  const [courses, setCourses] = useState(initialCourseState);
  const [formState, setFormState] = useState(initialFormState);
  const [subscriptionDataMessage, setSubscriptionDataMessage] = useState("");

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
      const courses = await API.graphql({
        query: allCourses,
        variables: { semester: "SPRING2021" },
        authMode: "AWS_IAM",
      });
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

      const result = await API.graphql({
        query: register,
        variables: { id: id, name: formState?.name },
        authMode: "AWS_IAM",
      });

      console.log("API result: ", result);
    } catch (error) {
      console.log("error adding registration", error);
    }
  }

  const onRegister = /* GraphQL */ `
    subscription onRegister {
      onRegister {
        id
        registrations {
          items {
            id
            name
          }
        }
      }
    }
  `;

  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onRegister)).subscribe({
      next: (registrationData) => {
        console.log("Subscription data: ", registrationData);
        setSubscriptionDataMessage("Sub data received!");
      },
      error: (error) => {
        console.log(error);
      },
    });

    return subscription.unsubscribe;
  }, []);

  return (
    <div className={parentContainer}>
      <div className={container}>
        <AmplifySignOut />
        <Header as="h1" icon textAlign="center">
          <Icon name="users" circular />
          <Header.Content>CD test / IAM</Header.Content>
          <Header sub>{subscriptionDataMessage}</Header>
        </Header>
        <Input
          onChange={(event) => setInput("name", event.target.value)}
          value={formState.name}
          placeholder="Enter name to register"
        />
        <List>
          {courses.map((courseItem) => (
            <ListItem key={courseItem.id}>
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

export default withAuthenticator(App);
