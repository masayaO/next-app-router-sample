import { Main } from "@/app/_components/Main";
import { getAllBookmark } from "@/app/repository";
import { List, ListItem } from "@/app/_components/List";
import { BookmarkRow } from "@/app/_components/BookmarkRow";
import { ExternalLink } from "@/app/_components/ExternalLink";
import { RemoveBookmark } from "@/app/my/RemoveBookmark";

export default async function My() {
  const bookmarks = await getAllBookmark();
  return (
    <Main>
      <List>
        {bookmarks.map(({ id, title, url, comment }) => (
          <ListItem key={id}>
            <BookmarkRow
              link={<ExternalLink href={url}>{title}</ExternalLink>}
              comment={comment}
              action={<RemoveBookmark id={id} />}
            />
          </ListItem>
        ))}
      </List>
    </Main>
  );
}
