import React, { useEffect, useState } from "react";
import LinkForm from "./components/LinkForm";
import LinkList from "./components/LinkList";

/*
  Create Link
  Display Links
  Add, Delete, and archived functionality
*/
function App() {
  const [links, setLinks] = useState([]);

  const loadLinks = async () => {
    try {
      const res = await fetch("/api/getLinks");
      const allLinks = await res.json();
      setLinks(allLinks);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadLinks();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">List Link</h1>
      <LinkForm refreshLinks={loadLinks} />
      <LinkList links={links} refreshLinks={loadLinks} />
    </div>
  );
}

export default App;
