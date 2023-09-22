import { ActionIcon, Anchor, Box, createStyles, Group } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons";
import AppleDownloadButton from "../../assets/icons/Apple-Download-Button.png";
import GoogleDownloadButton from "../../assets/icons/Google-Download-Button.png";
import Background from "../../assets/images/Background.png";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  footer: {
    position: "relative",
    padding: 50,
    paddingBlock: 80,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[4]
    }`,
    // backgroundColor: "#fafafa",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  background: {
    backgroundImage: `url(${Background})`,
    position: "absolute",
    inset: 0,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: -1,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  links: {
    fontWeight: 400,
    fontSize: 24,
    gap: 30,
    alignItems: "center",
    justifyContent: "center",
    [theme.fn.smallerThan("md")]: {
      fontSize: 20,
    },

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

export default function Footer() {
  const links = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/properties",
      label: "Buy",
    },
    {
      link: "/exchange",
      label: "Exchange",
    },
    {
      link: "/rent",
      label: "Rent",
    },
    {
      link: "/blogs",
      label: "News & Insights",
    },
  ];

  const navigate = useNavigate();

  const { classes } = useStyles();
  const items = links.map((link, index) => (
    <Anchor
      color="dimmed"
      key={link.label}
      onClick={() => {
        navigate(link.link);
      }}
      sx={{
        lineHeight: 1,

        borderRight:
          index !== links.length - 1 ? "2px solid lightgray" : "none",
        paddingRight: "15px",
      }}
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
      <Box className={classes.background}></Box>
      <Group className={classes.links}>{items}</Group>
      <Group
        align="center"
        style={{
          justifyContent: "center",
        }}
      >
        <img
          src={AppleDownloadButton}
          alt="Apple Download Button"
          width={160}
          style={{
            cursor: "pointer",
          }}
          onClick={() =>
            window.open("https://www.apple.com/app-store/", "_blank")
          }
        />

        <img
          src={GoogleDownloadButton}
          alt="Google Download Button"
          width={160}
          style={{
            cursor: "pointer",
          }}
          onClick={() =>
            window.open("https://play.google.com/store/games", "_blank")
          }
        />
      </Group>
      <div className={classes.inner}>
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
