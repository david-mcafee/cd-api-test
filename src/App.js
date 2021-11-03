import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
// I recognized the unfortunate auto-naming of this query...
import { listClasss } from "./graphql/queries";
import {
  Header,
  Icon,
  List,
  ListItem,
  ListContent,
  ListHeader,
} from "semantic-ui-react";
import { useStyles } from "./styles";

const initialClassState = [];

const App = () => {
  const [classes, setClasses] = useState(initialClassState);

  const { container, parentContainer } = useStyles();

  useEffect(() => {
    fetchClasses();
  }, []);

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

  return (
    <div className={parentContainer}>
      <div className={container}>
        <Header as="h1" icon textAlign="center">
          <Icon name="users" circular />
          <Header.Content>My Classes</Header.Content>
          <Header sub>CD API test</Header>
        </Header>
        <List>
          {classes.map((classItem) => (
            <ListItem key={classItem.id}>
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
