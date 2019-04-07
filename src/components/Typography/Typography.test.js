import React from "react";
import variantsMap from "./variantsMap";
import renderer from "react-test-renderer";
import Typography from "./Typography";

test("Can create Typography", () => {
  expect(Typography).toBeDefined();
  variantsMap.forEach((variantValue, variantKey) => {
    const component = renderer.create(
      <Typography varian={variantKey}>Test</Typography>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

test("Can override default custom css", () => {
  const customStyle = {
    color: "red",
    fontSize: "20px"
  };
  const component = renderer.create(
    <Typography variant="h1" customizeStyle={customStyle}>
      Styling Test
    </Typography>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
