import React from "react";

const LinkCard = ({ link, refreshLinks }) => {
  const archiveLink = async () => {
    link.archived = true;
    try {
      await fetch("/api/updateLink", {
        method: "PUT",
        body: JSON.stringify(link),
      });
      refreshLinks();
    } catch (error) {
      console.error("archive link error: ", error);
    }
  };

  const deleteLink = async () => {
    const id = link._id;
    try {
      await fetch("/api/deleteLink", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      refreshLinks();
    } catch (error) {
      console.error("delete link error: ", error);
    }
  };

  return (
    link && (
      <div className="card">
        <div className="card-header">{link.name}</div>
        <div className="card-description">
          <a href={link.url}>{link.url}</a>
          <p>{link.description}</p>
        </div>
        <div className="card-footer">
          <button onClick={archiveLink} className="btn btn-warning mr-2">
            Archive
          </button>
          <button onClick={deleteLink} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    )
  );
};

export default LinkCard;
