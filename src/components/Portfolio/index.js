import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, CardGroup, Stack } from "react-bootstrap";
import wtb from "../../assets/images/wtb.jpg";
import dd from "../../assets/images/dd.jpg";

function Portfolio() {
  return (
    <Container>
      <div>
        <h1>Portfolio</h1>
      </div>
      <CardGroup>
        <Stack gap={5}>
          <div>
            <Card>
              <a href="https://want-to-buy.herokuapp.com/">
                <Card.Img variant="top" src={wtb} />
              </a>
              <Card.Body>
                <Card.Title>WTB</Card.Title>
                <Card.Text>
                  Want To Buy (WTB) was designed to put buyers front and center,
                  letting them create posts of what they want. Sellers can
                  contact a buyer via email if they have an item that matches
                  the buyer's description and price. Visit WTB by clicking on
                  the image or GitHub repo by clicking{" "}
                  <a
                    className="link"
                    href="https://github.com/taylorkeltgen/want-to-buy"
                  >
                    {" "}
                    here!
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <a href="https://pardue95.github.io/the-8-team-project/">
                <Card.Img variant="top" src={dd} />
              </a>
              <Card.Body>
                <Card.Title>Drink and Dice</Card.Title>
                <Card.Text>
                  Drinks N’ Dice is a randomizer that will help groups of
                  friends and families decide what they want to play on a given
                  evening in together, as well as spice things up with a perfect
                  cocktail. Who doesn’t love to have a game night in surrounded
                  by loved ones and laughs...and the occasional spirit? Drinks
                  N’ Dice takes the guesswork out of “What will we play?” or
                  “What do we need to make?” This site can do both for you and
                  have you playing, laughing, and having a great time in a
                  matter of moments. Visit Drink and Dice by clicking on the
                  image or GitHub repo by clicking{" "}
                  <a
                    className="link"
                    href="https://github.com/pardue95/the-8-team-project"
                  >
                    {" "}
                    here.
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Stack>
      </CardGroup>
    </Container>
  );
}

export default Portfolio;
