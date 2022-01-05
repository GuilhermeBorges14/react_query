import axios from "axios";
import { useMutation } from "react-query";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Post = () => {
  const [name, setName] = useState();
  const [job, setJob] = useState();
  const history = useHistory();

  const postUser = async () => {
    const { data } = await axios.post("https://reqres.in/api/users", {
      name: name,
      job: job,
    });
    return data;
  };

  const { mutate: postData } = useMutation(postUser, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  function handleClick() {
    postData();
  }

  return (
    <>
      <input
        placeholder="name"
        id="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="job"
        id="job"
        onChange={(e) => setJob(e.target.value)}
      />
      <button onClick={handleClick}>Send</button>
      <button onClick={() => history.push("/list")}>List</button>
    </>
  );
};

export default Post;
