import styled from "styled-components";

const AboutPage = () => {
  return (
    <About>
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="about-box">
              <h2>About us</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages andIt is a long established fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution of letters, as
                opposed to using 'Content here, content here', making it look
                like readable English. Many
              </p>
              <a href="">Read more</a>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 padding_rl">
            <div class="about-box_img">
              <figure>
                <img src="images/about.jpg" alt="#" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </About>
  );
};

const About = styled.div`
  background-color: gold;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default AboutPage;
