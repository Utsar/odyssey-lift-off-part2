import { RESTDataSource } from "apollo-datasource-rest";

const TrackAPI = () => {
  const baseURL = RESTDataSource(
    "https://odyssey-lift-off-rest-api.herokuapp.com/"
  );
  return {};
};

export default TrackAPI;
