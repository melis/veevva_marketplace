import axios from "axios";

export const setCategory = (data) => {
  return { type: 'SET_CATEGORY', paylod: data.category };
};

export const setLoad=(str)=>({
  type: 'SET_LOAD',
  paylod: !str? true: str==='off'? false: true
})

export const loadCategory = () => {
  return async (dispatch) => {
    dispatch(setLoad());
    try{
      const {data}=await axios.get( 'http://pro01/api/api/list/category')
      dispatch(setCategory(data))
    }
    catch(e){
      dispatch({type: 'SET_ERROR', paylod: 'Some thing is wrong!'})
    }
 }
}



