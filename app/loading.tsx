import { Main } from "@/app/_components/Main";
import { List, ListItem } from "@/app/_components/List";
import { Loading } from "@/app/_components/Loading";

export default function LoadingPage() {
  return (
    <Main>
      <List>
        <ListItem>
          <Loading />
        </ListItem>
      </List>
    </Main>
  );
}
