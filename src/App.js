import profile from "./Rishi.jpeg";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import Link from "@material-ui/core/Link";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EmailIcon from "@material-ui/icons/Email";
import { Tweet } from "react-twitter-widgets";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: "0 auto",
    marginTop: "32px",
    marginBottom: "32px",
    border: "4px solid #55BCD5",
  },
  title: {
    marginTop: "32px",
  },
  links: {
    marginBottom: "64px",
  },
  furtherLinks: {
    marginTop: "32px",
  },
  media: {
    height: 240,
  },
  fullHeight: {
    height: "100%",
  },
  footer: {
    backgroundColor: 'white',
    borderTop: '1px solid #55BCD5'
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <div className="App">
        <Container>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            className="title"
          >
            Rishi Sunak
          </Typography>
          <Avatar alt="Rishi Sunak" src={profile} className={classes.large} />
          <Typography variant="h5" component="h2" gutterBottom>
            Follow the Chancellor of the Exchequer.
          </Typography>
          <div className={classes.links}>
            <Link href="https://www.facebook.com/rishisunak/" variant="body2">
              <IconButton aria-label="facebook">
                <FacebookIcon
                  className="fa fa-plus-circle"
                  style={{ fontSize: 48, color: "#4267B2" }}
                />
              </IconButton>
            </Link>

            <Link href="https://twitter.com/RishiSunak" variant="body2">
              <IconButton aria-label="twitter">
                <TwitterIcon
                  className="fa fa-plus-circle"
                  href=""
                  style={{ fontSize: 48, color: "#39A2F2" }}
                />
              </IconButton>
            </Link>

            <Link
              href="https://www.instagram.com/rishisunakmp/"
              variant="body2"
            >
              <IconButton aria-label="instagram">
                <InstagramIcon
                  className="fa fa-plus-circle"
                  style={{ fontSize: 48, color: "e4405f" }}
                />
              </IconButton>
            </Link>

            <Link
              href="https://www.linkedin.com/in/rishi-sunak-4361871a5/"
              variant="body2"
            >
              <IconButton aria-label="linkedin">
                <LinkedInIcon
                  className="fa fa-plus-circle"
                  style={{ fontSize: 48, color: "#0077B5" }}
                />
              </IconButton>
            </Link>

            <Link
              href="https://www.youtube.com/channel/UCFAdRzdogoJg5ctT8ZALp3g"
              variant="body2"
            >
              <IconButton aria-label="youtube">
                <YouTubeIcon
                  className="fa fa-plus-circle"
                  style={{ fontSize: 48, color: "#cd201f" }}
                />
              </IconButton>
            </Link>

            <Link
              href="https://www.rishisunak.com/no-11-newsletter"
              variant="body2"
            >
              <IconButton aria-label="facebook">
                <EmailIcon
                  className="fa fa-plus-circle"
                  style={{ fontSize: 48, color: "#111" }}
                />
              </IconButton>
            </Link>
          </div>

          <div>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <Card className={classes.fullHeight}>
                  <CardActionArea href="https://www.gov.uk/government/topical-events/budget-2021">
                    <CardMedia
                      className={classes.media}
                      image="https://compiled.ams3.cdn.digitaloceanspaces.com/link_images/BzivuHJIgDWt28UshGqHPOyshfeJEKr3LlIE9k3I.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Budget 2021
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        The Chancellor of the Exchequer presented his Budget to
                        Parliament on Wednesday 3 March 2021.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item sm={4} xs={12}>
                <Card className={classes.fullHeight}>
                  <CardActionArea href="https://www.rishisunak.com/no-11-newsletter">
                    <CardMedia
                      className={classes.media}
                      image="https://pbs.twimg.com/media/Es4y-aQXYAEfk37.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        No. 11 Newsletter
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Sign up for the No. 11 Newsletter today!
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item sm={4} xs={12}>
                <Card className={classes.fullHeight}>
                  <CardActionArea href="https://kickstart.campaign.gov.uk/">
                    <CardMedia
                      className={classes.media}
                      image="https://kickstart.campaign.gov.uk/wp-content/uploads/sites/102/2020/11/KS_Header_PfJ-1536x572.png"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Kickstart
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        The Kickstart Scheme provides funding to create new job
                        placements for 16 to 24 year olds on Universal Credit
                        who are at risk of long term unemployment. Employers of
                        all sizes can apply.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item sm={4} xs={12}>
                <Card className={classes.fullHeight}>
                  <CardActionArea href="https://www.gov.uk/government/organisations/hm-treasury">
                    <CardMedia
                      className={classes.media}
                      image={profile}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        HM Treasury Latest
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item sm={4} xs={12}>
                <Card className={classes.fullHeight}>
                  <CardActionArea href="https://www.gov.uk/business-coronavirus-support-finder">
                    <CardMedia
                      className={classes.media}
                      image="https://www.rishisunak.com/sites/www.rishisunak.com/files/styles/one_column/public/2020-09/Rishi%20Sunak%20park%20800x480.jpg?itok=U97hB1Rc"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Coronavirus Support
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item sm={4} xs={12}>
                <Card className={classes.fullHeight}>
                  <CardActionArea href="https://www.rishisunak.com/">
                    <CardMedia
                      className={classes.media}
                      image="https://www.rishisunak.com/sites/www.rishisunak.com/files/styles/one_column/public/2020-09/Rishi%20Sunak%20speech%20800x480.jpg?itok=DXDcorFl"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Constituency Website
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </div>

          <div className={classes.tweets}>
            <Tweet
              options={{ align: "center" }}
              tweetId="1367109500591865860"
            />
          </div>
        </Container>
      </div>
      <Container>
        <div className={classes.footer}>
          <a href="https://compiled.social/" class="text-decoration-none text-body align-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1920 1080"
              width="124"
              height="70"
            >
              <g id="Layer 1">
                <g id="<Group>">
                  <path
                    id="Compiled "
                    fill="black"
                    d="M712.8 615.75Q682.54 615.75 660.8 603.65Q639.34 591.27 627.79 568.98Q616.23 546.42 616.23 515.88Q616.23 485.35 627.79 463.06Q639.34 440.78 660.8 428.67Q682.54 416.29 712.8 416.29Q727.93 416.29 742.51 420.14Q757.09 424 768.1 431.15Q775.25 435.83 776.63 442.43Q778 448.76 774.98 454.26Q771.95 459.49 765.9 461.41Q759.85 463.06 752.42 458.11Q743.89 452.61 733.98 450.13Q724.08 447.66 713.9 447.66Q684.46 447.66 669.06 465.54Q653.65 483.15 653.65 515.88Q653.65 548.62 669.06 566.51Q684.46 584.39 713.9 584.39Q724.36 584.39 734.53 581.91Q744.71 579.16 753.79 573.66Q761.22 568.98 767 570.63Q772.78 572.28 775.53 577.51Q778.55 582.46 777.45 588.51Q776.35 594.57 770.02 599.24Q759.02 607.22 743.61 611.62Q728.48 615.75 712.8 615.75ZM858.06 615.75Q837.15 615.75 821.75 607.22Q806.34 598.69 797.81 583.01Q789.28 567.06 789.28 545.6Q789.28 524.14 797.81 508.46Q806.34 492.77 821.75 484.25Q837.15 475.72 858.06 475.72Q878.97 475.72 894.38 484.25Q909.78 492.77 918.31 508.46Q926.84 524.14 926.84 545.6Q926.84 567.06 918.31 583.01Q909.78 598.69 894.38 607.22Q878.97 615.75 858.06 615.75ZM858.06 589.62Q873.47 589.62 882.82 578.61Q892.18 567.33 892.18 545.6Q892.18 523.59 882.82 512.86Q873.47 501.85 858.06 501.85Q842.66 501.85 833.3 512.86Q823.95 523.59 823.95 545.6Q823.95 567.33 833.3 578.61Q842.66 589.62 858.06 589.62ZM972.79 615.2Q955.73 615.2 955.73 597.59L955.73 493.6Q955.73 476.27 972.51 476.27Q989.29 476.27 989.29 493.6L989.29 499.1Q995.34 488.1 1006.07 482.04Q1016.8 475.72 1030.83 475.72Q1061.1 475.72 1070.45 502.13Q1076.78 489.75 1088.61 482.87Q1100.44 475.72 1115.57 475.72Q1160.96 475.72 1160.96 531.02L1160.96 597.59Q1160.96 615.2 1143.63 615.2Q1126.57 615.2 1126.57 597.59L1126.57 532.39Q1126.57 516.98 1121.35 509.83Q1116.4 502.68 1104.29 502.68Q1090.81 502.68 1083.11 512.31Q1075.4 521.66 1075.4 538.44L1075.4 597.59Q1075.4 615.2 1058.35 615.2Q1041.01 615.2 1041.01 597.59L1041.01 532.39Q1041.01 516.98 1035.79 509.83Q1030.83 502.68 1019 502.68Q1005.52 502.68 997.82 512.31Q990.12 521.66 990.12 538.44L990.12 597.59Q990.12 615.2 972.79 615.2ZM1213.51 664.72Q1196.45 664.72 1196.45 647.39L1196.45 493.6Q1196.45 476.27 1213.24 476.27Q1230.29 476.27 1230.29 493.6L1230.29 499.38Q1236.07 488.65 1247.63 482.32Q1259.18 475.72 1274.04 475.72Q1291.64 475.72 1304.85 484.25Q1318.33 492.77 1325.76 508.46Q1333.19 523.86 1333.19 545.6Q1333.19 567.06 1325.76 583.01Q1318.33 598.69 1305.12 607.22Q1291.92 615.75 1274.04 615.75Q1259.73 615.75 1248.18 609.7Q1236.9 603.37 1230.84 592.92L1230.84 647.39Q1230.84 664.72 1213.51 664.72ZM1264.41 589.62Q1279.81 589.62 1289.17 578.61Q1298.52 567.33 1298.52 545.6Q1298.52 523.59 1289.17 512.86Q1279.81 501.85 1264.41 501.85Q1249 501.85 1239.65 512.86Q1230.29 523.59 1230.29 545.6Q1230.29 567.33 1239.65 578.61Q1249 589.62 1264.41 589.62ZM1378.58 450.96Q1368.95 450.96 1363.45 446.28Q1358.22 441.33 1358.22 432.8Q1358.22 424 1363.45 419.32Q1368.95 414.64 1378.58 414.64Q1398.94 414.64 1398.94 432.8Q1398.94 450.96 1378.58 450.96ZM1378.58 614.93Q1370.33 614.93 1365.93 609.97Q1361.52 605.02 1361.52 596.22L1361.52 495.25Q1361.52 476.54 1378.58 476.54Q1395.91 476.54 1395.91 495.25L1395.91 596.22Q1395.91 605.02 1391.51 609.97Q1387.11 614.93 1378.58 614.93ZM1477.62 615.75Q1431.68 615.75 1431.68 564.3L1431.68 434.17Q1431.68 416.84 1448.74 416.84Q1466.07 416.84 1466.07 434.17L1466.07 562.65Q1466.07 587.41 1486.7 587.41Q1488.9 587.41 1490.83 587.41Q1492.75 587.14 1494.68 586.86Q1498.53 586.31 1499.91 589.06Q1501.28 591.54 1501.28 599.52Q1501.28 606.4 1498.53 610.25Q1495.78 614.1 1489.45 614.93Q1483.68 615.75 1477.62 615.75ZM1584.37 615.75Q1561.53 615.75 1545.03 607.22Q1528.52 598.69 1519.44 583.01Q1510.64 567.33 1510.64 545.87Q1510.64 524.96 1519.17 509.28Q1527.97 493.6 1543.1 484.8Q1558.51 475.72 1578.04 475.72Q1606.65 475.72 1623.16 493.87Q1639.94 512.03 1639.94 543.4Q1639.94 553.57 1626.74 553.57L1543.65 553.57Q1547.5 589.62 1584.92 589.62Q1592.07 589.62 1600.87 587.96Q1609.95 586.04 1617.93 581.64Q1625.08 577.51 1630.04 579.16Q1634.99 580.54 1636.91 584.94Q1639.12 589.34 1637.46 594.84Q1636.09 600.07 1629.76 603.92Q1620.13 609.97 1607.48 613Q1595.1 615.75 1584.37 615.75ZM1579.42 499.1Q1564.28 499.1 1554.93 508.46Q1545.58 517.81 1543.65 533.77L1611.33 533.77Q1610.23 516.98 1601.97 508.18Q1594 499.1 1579.42 499.1ZM1718.9 615.75Q1701.29 615.75 1687.81 607.22Q1674.61 598.69 1667.18 583.01Q1659.75 567.06 1659.75 545.6Q1659.75 523.86 1667.18 508.46Q1674.61 492.77 1687.81 484.25Q1701.29 475.72 1718.9 475.72Q1733.21 475.72 1744.76 482.04Q1756.31 488.37 1762.09 498.83L1762.09 434.17Q1762.09 416.84 1779.15 416.84Q1796.48 416.84 1796.48 434.17L1796.48 597.59Q1796.48 615.2 1779.42 615.2Q1762.37 615.2 1762.37 597.59L1762.37 591.82Q1756.59 602.82 1745.04 609.42Q1733.48 615.75 1718.9 615.75ZM1728.53 589.62Q1743.93 589.62 1753.29 578.61Q1762.64 567.33 1762.64 545.6Q1762.64 523.59 1753.29 512.86Q1743.93 501.85 1728.53 501.85Q1713.12 501.85 1703.77 512.86Q1694.41 523.59 1694.41 545.6Q1694.41 567.33 1703.77 578.61Q1713.12 589.62 1728.53 589.62Z"
                  ></path>
                  <path
                    id="<Compound Path>"
                    fill="#41A3C5"
                    fill-rule="evenodd"
                    class="shp0"
                    d="M535.91 540.85C535.18 656.51 441.24 748.55 325.6 747.02C222.76 745.67 137.96 669.51 123.17 570.48C121.84 561.66 128.58 553.7 137.51 553.7L294.16 553.7L216.57 631.29C211.36 636.5 210.65 644.94 215.36 650.62C220.76 657.14 230.48 657.49 236.32 651.64L338.41 549.55C339.48 548.48 340.34 547.3 340.99 546.03C341.07 545.86 341.16 545.67 341.25 545.49C341.35 545.29 341.44 545.07 341.52 544.85C341.78 544.22 341.99 543.57 342.16 542.9C342.21 542.68 342.26 542.46 342.3 542.23C342.35 542.01 342.39 541.78 342.41 541.55C342.45 541.34 342.48 541.11 342.5 540.88C342.5 540.79 342.51 540.7 342.51 540.61C342.55 540.26 342.56 539.89 342.56 539.53C342.56 539.16 342.55 538.8 342.51 538.43C342.51 538.35 342.5 538.26 342.5 538.17C342.48 537.94 342.45 537.71 342.41 537.49C342.39 537.26 342.35 537.03 342.3 536.82C342.26 536.59 342.21 536.37 342.16 536.14C341.99 535.48 341.78 534.83 341.52 534.19C341.44 533.98 341.35 533.76 341.25 533.56C341.16 533.38 341.07 533.2 340.99 533.02C340.34 531.75 339.48 530.56 338.41 529.49L236.32 427.4C233.56 424.64 229.93 423.26 226.3 423.26C222.67 423.26 219.04 424.64 216.28 427.4C210.74 432.94 210.74 441.94 216.28 447.46L294.16 525.34L137.51 525.34C128.6 525.34 121.84 517.39 123.17 508.59C138.09 408.64 224.27 332 328.39 332C443.45 332 536.63 425.62 535.91 540.85ZM342.56 607.58C342.56 599.74 336.21 593.4 328.39 593.4C320.56 593.4 314.21 599.74 314.21 607.58L314.21 675.64C314.21 683.46 320.56 689.81 328.39 689.81C336.21 689.81 342.56 683.46 342.56 675.64L342.56 607.58ZM366.5 501.42C372.02 506.95 381 506.95 386.54 501.42L434.66 453.3C440.2 447.76 440.2 438.78 434.66 433.25C431.89 430.47 428.26 429.1 424.63 429.1C421 429.1 417.39 430.47 414.61 433.25L366.5 481.37C360.96 486.91 360.96 495.88 366.5 501.42ZM342.56 403.41C342.56 395.58 336.21 389.22 328.39 389.22C320.56 389.22 314.21 395.58 314.21 403.41L314.21 471.46C314.21 479.29 320.56 485.64 328.39 485.64C336.21 485.64 342.56 479.29 342.56 471.46L342.56 403.41ZM434.66 625.74L386.54 577.62C383.77 574.86 380.15 573.47 376.52 573.47C372.89 573.47 369.26 574.86 366.5 577.62C360.96 583.15 360.96 592.13 366.5 597.67L414.61 645.8C420.15 651.32 429.13 651.32 434.66 645.8C440.2 640.26 440.2 631.28 434.66 625.74ZM478.69 539.52C478.69 531.7 472.33 525.34 464.51 525.34L396.45 525.34C388.62 525.34 382.26 531.7 382.26 539.52C382.26 547.35 388.62 553.69 396.45 553.69L464.51 553.69C472.33 553.69 478.69 547.35 478.69 539.52Z"
                  ></path>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </Container>
    </div>
  );
}

export default App;
