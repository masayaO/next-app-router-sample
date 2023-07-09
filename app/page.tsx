import Image from "next/image";
import { fetchHackerNews } from "@/app/repository";
import { Main } from "@/app/_components/Main";
import { List, ListItem } from "@/app/_components/List";
import { HNStoryRow } from "@/app/_components/HNStoryRow";
import { ExternalLink } from "@/app/_components/ExternalLink";
import { AddBookMark } from "@/app/AddBookMark";

export default async function Home() {
  const stories = await fetchHackerNews(30);

  console.log(stories);
  return (
    <Main>
      <List>
        {stories.map(({ id, rank, title, url }) => (
          <ListItem key={id}>
            <HNStoryRow
              rank={rank}
              title={
                url ? (
                  <ExternalLink href={url}>{title}</ExternalLink>
                ) : (
                  <span>{title}</span>
                )
              }
              action={url && <AddBookMark title={title} url={url} />}
            />
          </ListItem>
        ))}
      </List>
    </Main>
  );
}
