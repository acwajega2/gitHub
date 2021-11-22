import React from "react";
import "./Search.css";
import {Button} from "antd";
import 'antd/dist/antd.css';

const Search = props => {
  return (
    <div>
      <form id="profile-search" onSubmit={e => props.onSubmitHandler(e)}>
        <label>
          <input
            className="input-field"
            value={props.name}
            onChange={e => props.onChangeHandler(e)}
            placeholder="Search profile.."
          />
        </label>
        <Button className="btn" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;
