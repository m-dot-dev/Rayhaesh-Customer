import { ActionIcon, Anchor, createStyles, Group } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 50,
    padding: 10,
    borderTop: `2px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[4]
    }`,
    backgroundColor: "#e5e5e5",
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  links: {
    fontWeight: 600,
    fontSize: 20,
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

export default function Footer() {
  const links = [
    {
      link: "#",
      label: "Contact",
    },
    {
      link: "#",
      label: "Privacy",
    },
    {
      link: "#",
      label: "Blog",
    },
    {
      link: "#",
      label: "Store",
    },
    {
      link: "#",
      label: "Careers",
    },
  ];

  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor
      color="dimmed"
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  const handleRedirect = (type) => {
    let link;
    switch (type) {
      case "facebook":
        link = "https://www.facebook.com";
        break;
      case "twitter":
        link = "https://www.twitter.com";
        break;
      case "instagram":
        link = "https://www.instagram.com";
        break;
      case "youtube":
        link = "https://www.youtube.com";
        break;
    }
    window.open(link, "_blank");
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.inner}>
        {/* <Group className={classes.links}>{items}</Group> */}
        <Group className={classes.links}>{}</Group>

        <Group spacing="xs" position="right" noWrap>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            onClick={() => handleRedirect("twitter")}
          >
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            onClick={() => handleRedirect("facebook")}
          >
            <IconBrandFacebook size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            onClick={() => handleRedirect("instagram")}
          >
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            onClick={() => handleRedirect("youtube")}
          >
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </footer>
  );
}
