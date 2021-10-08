import{ActionType} from './actionType'
export const enterDogBreed=(breed)=>{
       return {
           type: "ENTER_DOGBREED",
           payload:breed,
       };
};
