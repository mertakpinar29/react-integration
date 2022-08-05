"use strict";

class C1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: 30,
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <img
          width="300px"
          src="https://thumbs.dreamstime.com/b/cosmos-beauty-deep-space-elements-image-furnished-nasa-science-fiction-art-102581846.jpg"
        />
        <h2>This is the first component of first app</h2>
      </div>
    );
  }
}

export default C1;
