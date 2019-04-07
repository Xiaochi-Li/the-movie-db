import { getTrimmedMovieList } from "./movieDataExtractor";
import originalForms from "./__fixtures__/testPopularMoviesData";

it("should return a simplified JSON form", () => {
  expect.addSnapshotSerializer({
    test: val => true, // is this needed?
    print: val => `${JSON.stringify(val, null, 2)}`
  });

  expect(getTrimmedMovieList(originalForms)).toMatchSnapshot();
});
