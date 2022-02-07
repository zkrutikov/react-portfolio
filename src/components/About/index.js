import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import about from "../../assets/images/about.jpg";
import { Stack } from "react-bootstrap";

function About() {
  return (
    <Container>
      <Stack gap={5}>
        <h1>About Me</h1>

        <img src={about} alt="About" className="photo" />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id
          dictum augue. Vivamus non nunc magna. Integer neque eros, viverra eu
          euismod ac, porta vitae lectus. Mauris dapibus vitae leo at sodales.
          Aenean lectus ligula, ornare nec faucibus ac, semper pharetra magna.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Proin sodales metus sed ultrices consequat.
          Duis id orci sodales, varius ante in, cursus enim. Cras id enim
          tincidunt, aliquam nibh ac, sagittis dui. Nunc eu odio a nisl faucibus
          ultrices. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Sed ante nunc, semper sit amet velit
          vitae, pretium iaculis velit. Quisque sit amet mi magna. Donec neque
          tortor, euismod non ex placerat, pellentesque sodales purus. Etiam
          rhoncus ex in scelerisque lacinia. Aenean vel ex ac est blandit
          eleifend. Maecenas dictum turpis ut metus tempus, eu rhoncus arcu
          porta. Aliquam viverra congue diam non mollis. Vestibulum quis sem
          vitae mauris lacinia luctus. Fusce nec dapibus massa. Proin odio leo,
          dapibus in aliquam ut, varius quis magna. In vel magna eu neque
          volutpat interdum eu et enim. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Aenean nunc mi, tincidunt et cursus sed,
          pellentesque in nunc. Pellentesque id nulla urna. Proin volutpat nisl
          quis laoreet dapibus. Quisque condimentum porttitor eros non
          dignissim. Mauris nec nunc pretium, tincidunt nunc eu, dictum dui.
          Nullam tristique consequat quam, id lobortis nisl tempus nec. Aenean
          euismod rutrum est, non consequat leo lacinia non. Duis consequat quis
          magna id ullamcorper. Nunc non nunc at metus posuere ultricies.
          Praesent et velit gravida, auctor metus quis, pretium augue. Nulla vel
          elit in tellus auctor auctor in at enim. Donec quis feugiat nunc, eu
          dictum ante. Cras id libero varius, finibus nisl sed, egestas orci.
          Curabitur laoreet posuere condimentum. Nullam odio tellus, semper ac
          pretium ac, hendrerit nec nisi. Donec ut libero eget urna blandit
          suscipit in vel quam. Suspendisse suscipit enim et sapien sagittis, et
          malesuada neque facilisis. Maecenas convallis ligula eget orci
          pellentesque feugiat. Quisque turpis leo, viverra et viverra at,
          faucibus ac nibh.
        </p>
      </Stack>
    </Container>
  );
}

export default About;
