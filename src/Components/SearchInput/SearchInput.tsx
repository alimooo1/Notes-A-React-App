import React, { ChangeEventHandler, LegacyRef } from "react";
import "./SearchInput.css";

interface props {
  Ref: LegacyRef<HTMLInputElement>,
  Change: ChangeEventHandler<HTMLInputElement>,
  Value: string
}

export default function SearchInput({ Ref, Change, Value }: props) {
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
