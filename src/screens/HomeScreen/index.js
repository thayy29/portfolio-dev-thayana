import Head from 'next/head'
import Footer from '../../components/patterns/Footer'
import Navbar from '../../components/patterns/Navbar'
import Link from '../../components/Link'
import { theme } from '../../theme/theme';
import { Image, Box, Text, Icon, Input, Button } from '../../theme/components';

const AVATAR_URL = 'images/avatar.jpg';
const SIDE_IMAGE_URL = 'https://fakeimg.pl/2878x1640'

function SideImage() {
  return (
    <Box
      styleSheet={{
        paddingHorizontal: {
          md: theme.space.x8,
        },
        marginHorizontal: {
          sm: 'auto'
        },
        maxWidth: {
          sm: theme.space.xcontainer_md,
        }
      }}
    >
      <Box
        styleSheet={{
          top: 0,
          bottom: 0,
          right: {
            lg: theme.space.x0
          },
          width: {
            lg: theme.space["x1/2"],
          },
          paddingTop: {
            xs: theme.space.x12,
            sm: theme.space.x16,
          },
          paddingBottom: {
            lg: theme.space.x16,
          },
          position: {
            sm: 'relative',
            lg: 'absolute',
          }
        }}
      >
        <Box
          styleSheet={{
            height: {
              lg: theme.space["x1/1"],
            },
            maxWidth: {
              sm: theme.space.xcontainer_md,
              lg: 'none'
            },
            position: 'relative',
            paddingHorizontal: {
              sm: theme.space.x0,
            },
            paddingLeft: {
              lg: theme.space.x12,
            },
            marginRight: {
              lg: `-${theme.space.x40}`,
            },
            marginHorizontal: {
              sm: 'auto',
            },
          }}
        >
          <Image
            styleSheet={{
              boxShadow: `0 5px 16px 0px ${theme.colors.neutral[999]}73`,
              borderRadius: {
                md: theme.space.x4,
              },
              maxWidth: {
                lg: "none",
              },
              width: {
                lg: "auto",
              },
              height: {
                lg: theme.space["x1/1"],
              },
            }}
            src={SIDE_IMAGE_URL}
            alt="Treinamento com a roberta arcoverde no alura cases, falando sobre o stackoverflow"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default function HomeScreen() {
  return (
    <Box>
      <Head>
        <title>
          Home Page
        </title>
      </Head>
      <Box
        as="main"
        styleSheet={{
          flex: 1,
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            backgroundColor: theme.colors.primary["900"],
          }}>
          <Box
            className="avatar"
            styleSheet={{
              display: "flex",
              justifyContent: "flex-start",
            }}
            >
            <Image
            styleSheet={{
              width: "auto",
              height: theme.space.x20,
              borderRadius: theme.typography.variants.display1.borderRadius.xs,
            }}
            src={AVATAR_URL}
            alt="Avatar url"
              />
          </Box>
          <Box
            className="navbar"
            styleSheet={{
              color: theme.colors.neutral["000"],
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: theme.space['x5'],
              width: "50%",
              margin: "0 auto"
          }}>
            <Navbar
              styleSheet={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                textDecoration: "none",
              }}
            />
          </Box>
        </Box>

        <Box
          styleSheet={{
            backgroundColor: theme.colors.neutral["300"],

            overflow: 'hidden',
            position: {
              lg: 'relative',
            },
            paddingTop: {
              xs: theme.space.x6,
              sm: theme.space.x12,
            },
            paddingVertical: {
              md: theme.space.x20,
              lg: theme.space.x24,
            },
          }}
        >
          <Box
            styleSheet={{
              marginHorizontal: 'auto',
              paddingHorizontal: {
                xs: theme.space.x4,
                sm: theme.space.x6,
                lg: theme.space.x8,
              },
              maxWidth: {
                sm: theme.space.xcontainer_md,
                lg: theme.space.xcontainer_lg,
              },
              display: {
                lg: "grid",
              },
              gap: {
                lg: theme.space.x24,
              },
              gridTemplateColumns: {
                lg: "repeat(2, minmax(0, 1fr))",
              }
            }}
          >
            <Box>
              <Box
                styleSheet={{
                  marginTop: {
                    xs: theme.space.x16,
                    sm: theme.space.x20,
                  },
                }}
              >
                <Box>
                  <Link
                    href="/faq"
                    styleSheet={{
                      display: "inline-flex",
                      alignItems: {
                        xs: "flex-start",
                        sm: "center",
                      },
                      flexDirection: {
                        xs: "column",
                        sm: "row",
                      },
                    }}
                  >
                    <Text
                      styleSheet={{
                        textVariant: theme.typography.variants.body4,
                        fontWeight: "600",
                        borderRadius: theme.space.x64,
                        color: theme.colors.primary["400"],
                        backgroundColor: theme.colors.primary["100"],
                        paddingHorizontal: theme.space['x2.5'],
                        paddingVertical: theme.space['x1'],
                        marginRight: theme.space.x2,
                        marginBottom: {
                          xs: theme.space.x2,
                          sm: theme.space.x0
                        },
                      }}
                    >
                      O que tem de novo?
                    </Text>
                    <Text
                      styleSheet={{
                        textVariant: theme.typography.variants.body4,
                        fontWeight: "600",
                        display: 'inline-flex',
                        borderRadius: theme.space.x64,
                        color: theme.colors.primary["400"],
                        alignItems: 'center',
                      }}
                    >
                      <Text>Confira as principais dúvidas</Text>
                      <Icon
                        styleSheet={{
                          iconVariant: 'chevronRight',
                          marginLeft: theme.space.xpx,
                        }}
                        aria-hidden="true"
                      />
                    </Text>
                  </Link>
                </Box>
                <Box
                  styleSheet={{
                    marginTop: theme.space.x6,
                    maxWidth: theme.space.xcontainer_sm,
                  }}
                >
                  <Text
                    as="h2"
                    styleSheet={{
                      textVariant: theme.typography.variants.heading2,
                      color: theme.colors.neutral["600"],
                    }}
                  >
                    Hello,
                  </Text>
                  <Text
                  as="h1"
                  styleSheet={{
                      textVariant: theme.typography.variants.heading1,
                      color: theme.colors.neutral["500"],
                    }}> My name is Thayana.</Text>
                        <Text
                  as="h4"
                  styleSheet={{
                      textVariant: theme.typography.variants.heading4,
                      color: theme.colors.neutral["200"],
                      paddingLeft: theme.space['x1.5']
                    }}> Front-end Developer</Text>
                  <Text
                    as="p"
                    styleSheet={{
                      textVariant: theme.typography.variants.body1,
                      color: theme.colors.neutral["500"],
                      marginTop: theme.space.x6,
                    }}
                  >
                    Im a front-end developer who is passionate about technology and music producer
                  </Text>
                  <Text
                    as="p"
                    styleSheet={{
                      textVariant: theme.typography.variants.body1,
                      color: theme.colors.neutral["500"],
                      marginTop: theme.space.x6,
                    }}
                  >
                   Get to know me and ask me out for a coffee!
                  </Text>
                </Box>
                <Box
                  as="form"
                  action="#"
                  styleSheet={{
                    display: {
                      sm: 'flex',
                    },
                    marginTop: theme.space.x12,
                    width: {
                      sm: theme.space['x1/1'],
                    },
                    maxWidth: {
                      sm: theme.space.xcontainer_lg,
                    }
                  }}
                >
                  <Box
                    styleSheet={{
                      marginTop: {
                        xs: theme.space.x4,
                        sm: theme.space.x0,
                      },
                    }}
                  >
                    <Button
                      type="submit"
                      button variant
                    >
                      Hire Me
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* <SideImage /> */}
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
