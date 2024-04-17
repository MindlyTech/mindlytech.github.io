import Airtable from "airtable";

export const useAirtable = () => {
  return new Airtable({
    apiKey:
      "patKvNmvIjEIWft6c.03918234e49f6c7e5b249d44a078ea7334f164d0bbdd5c44735dd4ec7c9e5ffd",
  }).base("appav9Hopx2jQfkC8");
};
