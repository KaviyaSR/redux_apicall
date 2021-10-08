import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { enterDogBreed, callDogBreed } from "../Redux/action";

const FormState = () => {
  const breedState = useSelector((state) => state.allBreed.breeddog);
  //console.log(breedState);
  const dispatch = useDispatch();

  //const { id, name, origin } = breedState[0];

  const fetchDetails = async () => {
    const response = await axios
      .get("https://api.thedogapi.com/v1/breeds")
      .catch((err) => {
        console.log(err);
      });
    dispatch(enterDogBreed(response.data));
  };

  useEffect(() => {
    fetchDetails(breedState);
  }, []);
  console.log(breedState);
  return (
    <div>
      <table className="table table-hover">
        <thead className="fst-italic">
          <tr className="fs-2">
            <th>Name</th>
            <th>Life Span</th>
            <th>Breed Group</th>
          </tr>
        </thead>
        <tbody>
          {breedState.map((breedState) => {
            const { id, name, breed_group, life_span } = breedState;
            return (
              <tr key={breedState.id}>
                <td>{name}</td>
                <td>{life_span}</td>
                <td>{breed_group}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FormState;
