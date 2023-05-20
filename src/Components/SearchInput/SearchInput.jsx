import React from "react";
import "./SearchInput.css";

export default function SearchInput({ Ref, Change, Value }) {
  return (
    <input
      type="text"
      placeholder="Search Your Texts Here:"
      value={Value}
      onChange={Change}
      className="search-input"
      ref={Ref}
    />
  );
}
