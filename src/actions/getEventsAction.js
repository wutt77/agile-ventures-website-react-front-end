import axios from "axios";
import { GET_EVENTS } from "../types";

export let getEvents = events => ({ type: GET_EVENTS, payload: events });

export let fetchEvents = () => dispatch => {
  return axios.get("/events.json").then(response => {
    dispatch(getEvents(response.data));
  });
};
