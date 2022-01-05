import axios from "axios";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";

const List = () => {
  const history = useHistory();

  const useGetUsers = () => {
    return useQuery("listUsers", async () => {
      const { data } = await axios.get("https://reqres.in/api/users?page=2");
      return data;
    });
  };

  const { data: results } = useGetUsers();

  return (
    <>
      <div>{results && results.data.map((u) => <p>{u.first_name}</p>)}</div>
      <button onClick={() => history.push("/")}>Back</button>
    </>
  );
};

export default List;
